import React from 'react';
import check from '../../../assets/images/check.svg';

const ClassDiv = () => {
  return (
    <div className="flex flex-row w-[441px] h-[69px] items-center bg-white rounded-[20px] bg-[#fff] shadow-classDiv">
      <div className="flex flex-row ml-[20px] items-center gap-4">
        <img src={check} alt="check" />
        <p className="text-[26px] tracking-[-1.3px]">계산적사고법</p>
      </div>
    </div>
  );
};

export default ClassDiv;
