import React from 'react';
import check from '../../../assets/images/check.svg';

const ClassDiv = ({ is, subjectName }) => {
  return (
    <div className="flex flex-row w-[441px] h-[69px] items-center bg-white rounded-[20px] shadow-classDiv">
      <div className="flex flex-row ml-[20px] items-center gap-4">
        {is ? <img src={check} alt="check" /> : <div className="w-[36px] h-[36px] bg-gray-200 " />}
        <p className="text-[26px] tracking-[-1.3px]">{subjectName}</p>
      </div>
    </div>
  );
};

export default ClassDiv;
