import React from "react";

const TopBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-solid border-b-gray-300 max-sm:p-3 sticky top-0 z-50">
      <div className="flex gap-2 items-center">
        <button className="flex items-center" aria-label="Go back">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.828125 10.8203C0.59375 10.5859 0.5 10.3047 0.5 9.97655C0.5 9.6953 0.59375 9.41405 0.828125 9.17968L9.07812 1.30467C9.54688 0.8828 10.25 0.8828 10.6719 1.35155C11.0938 1.77342 11.0938 2.52342 10.625 2.9453L4.39062 8.85155H20.375C20.9844 8.85155 21.5 9.36718 21.5 9.97655C21.5 10.6328 20.9844 11.1016 20.375 11.1016H4.39062L10.625 17.0547C11.0938 17.4765 11.0938 18.1797 10.6719 18.6484C10.25 19.1172 9.54688 19.1172 9.07812 18.6953L0.828125 10.8203Z"
              fill="#575568"
            />
          </svg>
        </button>
        <h1 className="text-xl font-medium text-gray-800">Customers</h1>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-violet-500 rounded-md max-sm:px-3 max-sm:py-1.5">
        Save
      </button>
    </header>
  );
};

export default TopBar;
