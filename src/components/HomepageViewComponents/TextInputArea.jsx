import { BsUpload } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const TextInputArea = ({
  input,
  setInput,
  handleReset,
  handleFileUpload,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row">
      <textarea
        className="flex-1 w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-52"
        placeholder="One word per line"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div>
        <div className="flex mb-3 upload_wrapper ">
          <label
            htmlFor="file-upload"
            className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-black transition duration-200 bg-green-200 border border-green-400 rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <BsUpload />
            Upload File
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept=".txt"
          />
        </div>
        <button
          type="button"
          className={`flex flex-row items-center gap-2 px-4 py-2 text-sm text-black transition duration-200 border border-gray-400 rounded-lg shadow ${
            input ? "hover:bg-gray-100" : "opacity-40 shadow-none"
          } bg-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
          onClick={handleReset}
          disabled={!input}
        >
          <MdOutlineDeleteOutline />
          Clear All Text
        </button>
      </div>
    </div>
  );
};
