import { IoCopyOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { BsDownload } from "react-icons/bs";

export const ResultsDisplay = ({
  result,
  handleCopyToClipboard,
  copySuccess,
  downloadAsCSV,
  downloadAsPDF,
}) => {
  return (
    <div className="willSimplyFadeIn relative w-[90%] md:w-full flex flex-row items-start gap-3 mt-4">
      <div
        className="p-2 border border-gray-200 rounded-sm w-[80%]"
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
            {copySuccess ? <GiCheckMark /> : <IoCopyOutline />}
            {copySuccess ? copySuccess : "Copy"}
          </span>
        </button>
        {/* <button
          onClick={() => downloadAsCSV(result)}
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Download as CSV
        </button> */}

        <button
          onClick={() => downloadAsPDF(result)}
          className="flex flex-row items-center justify-start gap-2 px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
        >
          <BsDownload />
          Download as PDF
        </button>
      </div>
    </div>
  );
};
