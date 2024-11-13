import React from 'react';
import acoMent from '../../assets/images/aco_ment.svg';
import UploadButton from './UploadButton';

const NonFileChart = () => {
  return (
    <div className="flex flex-col gap-[44px] justify-center items-center">
      <img src={acoMent} alt="아코_파일" />
      <UploadButton />
    </div>
  );
};

export default NonFileChart;
