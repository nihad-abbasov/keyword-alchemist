export const ResultsDisplay = ({
  result,
  handleCopyToClipboard,
  copySuccess,
  downloadAsCSV,
  downloadAsPDF,
}) => {
  return (
    <div className="willSimplyFadeIn relative w-[90%] lg:w-full flex flex-col lg:flex-row items-start gap-3 mt-4">
      <div
        className="p-2 border border-gray-200 rounded-sm w-full lg:w-[80%]"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {result}
      </div>

      <div className="flex flex-col items-start gap-2 w-[20%] sticky top-5">
        <button
          onClick={handleCopyToClipboard}
          className={`${
            copySuccess
              ? "bg-blue-100 hover:bg-none"
              : "bg-green-600 hover:bg-green-700"
          } px-4 py-2 font-semibold text-white rounded-lg transition-colors duration-200`}
        >
          <span
            className={`flex flex-row justify-start items-center gap-1 text-sm ${
              copySuccess ? `text-blue-500` : `text-white`
            }`}
          >
            {copySuccess ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="336"
                  height="336"
                  x="128"
                  y="128"
                  fill="none"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  rx="57"
                  ry="57"
                ></rect>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                ></path>
              </svg>
            )}
            {copySuccess ? copySuccess : "Copy"}
          </span>
        </button>

        <p className="my-1 ml-[45%] lg:ml-[15%]">OR</p>

        <button
          onClick={() => downloadAsCSV(result)}
          className="flex flex-row items-center justify-between gap-2 px-3 py-2 mr-2 text-sm text-white bg-blue-500 rounded w-max hover:bg-blue-600"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
          </svg>
          Download as CSV
        </button>

        <button
          onClick={() => downloadAsPDF(result)}
          className="flex flex-row items-center justify-between gap-2 px-3 py-2 mr-2 text-sm text-white transition duration-200 bg-blue-500 rounded w-max hover:bg-blue-600"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
          </svg>
          Download as PDF
        </button>
      </div>
    </div>
  );
};
