import React from 'react';

const WhiteButtonMenu = ({ text, onClick, isActive = false, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${isActive 
          ? 'bg-white text-black' 
          : 'bg-white bg-opacity-15 text-white hover:bg-opacity-25'
        } 
        border-none rounded-[25px] px-6 py-3 transition-all duration-200 font-medium text-sm
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default WhiteButtonMenu;
