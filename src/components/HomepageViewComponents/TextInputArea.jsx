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
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path></svg>
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
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
          </svg>
          Clear All Text
        </button>
      </div>
    </div>
  );
};
