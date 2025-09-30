import React from 'react';

const WhiteButton = ({ text, onClick, className = "", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white text-black border border-gray-300 rounded-[10px] px-4 py-2 hover:bg-gray-50 transition-colors duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
