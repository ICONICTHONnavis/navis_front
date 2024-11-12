import React from 'react';

const CustomButton = ({ name, bg, onClickMethod, disabled }) => {
  return (
    <button
      className={`w-[386px] h-[69px] font-semibold text-[30px] text-brown-100 rounded-[30px] tracking-[-2.1px] ${bg ? ' bg-brown-200' : 'border border-brown-200'}`}
      type="button"
      onClick={onClickMethod}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default CustomButton;
