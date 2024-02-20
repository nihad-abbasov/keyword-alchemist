export const TextInputArea = ({ input, setInput, handleReset, handleFileUpload }) => {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row">
      <textarea
        className="flex-1 w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-52"
        placeholder="One word per line"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div>
        <button
          type="button"
          className="px-4 py-2 text-white bg-gray-500 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={handleReset}
        >
          Clear All Text
        </button>

        <div className="flex mt-3 upload_wrapper">
          <label
            htmlFor="file-upload"
            className="px-4 py-4 text-white bg-blue-500 rounded-lg shadow cursor-pointer hover:bg-blue-600"
          >
            Upload Keywords File
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept=".txt"
          />
        </div>
      </div>
    </div>
  );
};