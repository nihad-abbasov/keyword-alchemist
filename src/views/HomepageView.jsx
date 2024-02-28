"use client";

import { useState, useRef } from "react";

import { ResultsDisplay } from "../components/HomepageViewComponents/ResultsDisplay";
import { TextInputArea } from "../components/HomepageViewComponents/TextInputArea";
import { MatchTypeSelector } from "../components/HomepageViewComponents/MatchTypeSelector";
import { PopupModal } from "../components/HomepageViewComponents/PopupModal";

import { downloadAsCSV, downloadAsPDF } from "../utils/fileOperations";

export const HomepageView = () => {
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

  const popupTimeoutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyMatchTypeSelected =
      matchTypes.broad || matchTypes.phrase || matchTypes.exact;

    if (!isAnyMatchTypeSelected) {
      setShowPopup(true);
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
      popupTimeoutRef.current = setTimeout(() => {
        setShowPopup(false);
        popupTimeoutRef.current = null;
      }, 3000);
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
    // window.location.reload();
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
    <section className="flex flex-col items-center justify-center w-full pt-10 pb-0 mx-auto lg:pt-20 lg:pb-20">
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
          className="flex flex-row items-center justify-center w-full gap-2 px-4 py-3 text-white transition duration-150 bg-blue-500 rounded-lg shadow lg:w-1/5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M259.92 262.91 216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17zM108 68 88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"></path></svg>
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
    </section>
  );
};
