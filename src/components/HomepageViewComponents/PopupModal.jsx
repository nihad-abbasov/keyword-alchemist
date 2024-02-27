import { IoIosThumbsUp } from "react-icons/io";

export const PopupModal = ({ setShowPopup }) => {
  return (
    <div className="willSimplyFadeIn fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <p>Please select at least one search type.</p>
        <button
          className="flex flex-row justify-center items-center gap-1 px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg"
          onClick={() => setShowPopup(false)}
        >
          Okay
          <IoIosThumbsUp />
        </button>
      </div>
    </div>
  );
};
