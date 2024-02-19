"use client";

import { useState } from "react";

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

    Object.keys(matchTypes).forEach((type) => {
      if (matchTypes[type] && type !== "all") {
        const currentProcessedLines = lines.map((line) => {
          switch (type) {
            case "phrase":
              return `"${line}"`;
            case "exact":
              return `[${line}]`;
            default:
              return line;
          }
        });

        processedLines = [...processedLines, ...currentProcessedLines];
      }
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
  };

  return (
    <div className="container max-w-4xl p-4 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-start gap-2">
          <textarea
            className="flex-1 w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter keywords..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <button
            type="button"
            className="px-4 py-2 text-white bg-gray-500 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label>
            <input
              type="checkbox"
              name="all"
              checked={matchTypes.all}
              onChange={handleMatchTypeChange}
            />{" "}
            All
          </label>
          <label>
            <input
              type="checkbox"
              name="broad"
              checked={matchTypes.broad}
              onChange={handleMatchTypeChange}
            />{" "}
            Broad Match
          </label>
          <label>
            <input
              type="checkbox"
              name="phrase"
              checked={matchTypes.phrase}
              onChange={handleMatchTypeChange}
            />{" "}
            Phrase Match
          </label>
          <label>
            <input
              type="checkbox"
              name="exact"
              checked={matchTypes.exact}
              onChange={handleMatchTypeChange}
            />{" "}
            Exact Match
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate
        </button>
      </form>
      {result && (
        <div
          className="p-4 mt-4 border border-gray-300 rounded-lg shadow-sm"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {result}
        </div>
      )}

      {showPopup && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <p>Please select at least one search type.</p>
            <button
              className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
