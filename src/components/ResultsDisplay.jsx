export const ResultsDisplay = ({
  result,
  handleCopyToClipboard,
  copySuccess,
}) => {
  return (
    <div className="willSimplyFadeIn relative w-[90%] md:w-full">
      <div
        className="p-2 mt-4 border border-gray-200 rounded-sm"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {result}
      </div>
      <button
        onClick={handleCopyToClipboard}
        className={`${
          !copySuccess
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-blue-100 hover:bg-none"
        } absolute top-0 right-0 px-4 py-2 mt-5 mr-2 font-semibold text-white rounded-lg transition-colors duration-200 w-[10%]`}
      >
        {/* {copySuccess ? (
          <span className="text-sm text-green-600">{copySuccess}</span>
        ) : (
          <span className="text-sm text-white">Copy</span>
        )} */}

        <span
          className={`text-sm ${copySuccess ? `text-green-600` : `text-white`}`}
        >
          {copySuccess ? copySuccess : "Copy"}
        </span>
      </button>
    </div>
  );
};
