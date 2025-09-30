import React from 'react';

const WhiteButtonIcon = ({ text, iconPath, onClick, className = "", disabled = false, iconSize = 20 }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white text-black border border-gray-300 rounded-[10px] px-4 py-2 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${className}`}
    >
      {iconPath && (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={iconPath}
            fill="currentColor"
          />
        </svg>
      )}
      {text}
    </button>
  );
};

export default WhiteButtonIcon;
