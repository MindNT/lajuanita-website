import React from 'react';

const WhiteTagsTrans = ({ text, className = "" }) => {
  return (
    <span
      className={`bg-white bg-opacity-15 text-white rounded-[30px] px-3 py-1 text-sm ${className}`}
    >
      {text}
    </span>
  );
};

export default WhiteTagsTrans;
