import React from 'react';
import acoMent from '../../assets/images/aco_ment.svg';
import UploadButton from './UploadButton';
import useFileFetch from '../../hooks/useFileFetch';

const NonFileChart = () => {
  const { uploadFile, handleFileChange } = useFileFetch();

  const handleFileSelect = file => {
    handleFileChange(file);
    uploadFile();
  };

  return (
    <div className="flex flex-col gap-[44px] justify-center items-center">
      <img src={acoMent} alt="아코_파일" />
      <UploadButton onFileSelect={handleFileSelect} />
    </div>
  );
};

export default NonFileChart;
