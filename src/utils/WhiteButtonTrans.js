import React from 'react';

const WhiteButtonTrans = ({ text, onClick, isActive = false, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${isActive 
          ? 'bg-white bg-opacity-25 border border-white' 
          : 'bg-white bg-opacity-15 border border-transparent hover:bg-opacity-20'
        } 
        text-white rounded-[30px] px-4 py-2 text-sm transition-all duration-200 
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default WhiteButtonTrans;
