"use client";

import { useState } from "react";

import { ResultsDisplay } from "../components/ResultsDisplay";
import { TextInputArea } from "../components/TextInputArea";
import { MatchTypeSelector } from "../components/MatchTypeSelector";
import { PopupModal } from "../components/PopupModal";

import { IoSparklesOutline } from "react-icons/io5";

import { downloadAsCSV, downloadAsPDF } from "../utils/fileOperations";

export default function Home() {
  const [input, setInput] = useState("");

  const [matchTypes, setMatchTypes] = useState({
    all: false,
    broad: false,
    phrase: false,
    exact: false,
  });
  const [result, setResult] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const [copySuccess, setCopySuccess] = useState("");

  const handleMatchTypeChange = (e) => {
    const { name, checked } = e.target;

    if (name === "all") {
      setMatchTypes({
        all: checked,
        broad: checked,
        phrase: checked,
        exact: checked,
      });
    } else {
      setMatchTypes({
        ...matchTypes,
        [name]: checked,

        all: name !== "all" && checked ? matchTypes.all : false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyMatchTypeSelected =
      matchTypes.broad || matchTypes.phrase || matchTypes.exact;

    if (!isAnyMatchTypeSelected) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    let processedLines = [];

    lines.forEach((line) => {
      if (matchTypes.broad) processedLines.push(line);
      if (matchTypes.phrase) processedLines.push(`"${line}"`);
      if (matchTypes.exact) processedLines.push(`[${line}]`);
    });

    setResult(processedLines.join("\n"));
  };

  const handleReset = () => {
    setInput("");
    setResult("");
    setMatchTypes({
      all: false,
      broad: false,
      phrase: false,
      exact: false,
    });
    window.location.reload();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const keywords = text.split("\n").filter((line) => line.trim() !== "");
      setInput(keywords.join("\n"));
    };
    reader.readAsText(file);
  };

  const handleCopyToClipboard = () => {
    if (result) {
      navigator.clipboard
        .writeText(result)
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const downloadResults = (data, fileName, fileType) => {
    const blob = new Blob([data], { type: fileType });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    // max-w-4xl
    <div className="flex flex-col items-center justify-center py-20 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-full space-y-6 mb-5"
      >
        <TextInputArea
          input={input}
          setInput={setInput}
          handleReset={handleReset}
          handleFileUpload={handleFileUpload}
        />
        <MatchTypeSelector
          matchTypes={matchTypes}
          handleMatchTypeChange={handleMatchTypeChange}
        />
        <button
          type="submit"
          className="flex flex-row justify-center items-center gap-2 w-1/5 px-4 py-3 text-white transition duration-150 bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <IoSparklesOutline />
          Generate
        </button>
      </form>

      {result && (
        <ResultsDisplay
          result={result}
          handleCopyToClipboard={handleCopyToClipboard}
          copySuccess={copySuccess}
          // downloadResults={downloadResults}
          downloadAsCSV={downloadAsCSV}
          downloadAsPDF={downloadAsPDF}
        />
      )}

      {showPopup && <PopupModal setShowPopup={setShowPopup} />}
    </div>
  );
}
