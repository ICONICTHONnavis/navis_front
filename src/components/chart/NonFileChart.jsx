import React from 'react';
import acoMent from '../../assets/images/aco_ment.svg';
import UploadButton from './UploadButton';
import useFileFetch from '../../hooks/useFileFetch';

const NonFileChart = () => {
  const { uploadFile, handleFileChange, selectedFile } = useFileFetch();

  const handleFileSelect = file => {
    handleFileChange(file);
  };

  const handleSubmit = async () => {
    await uploadFile();
  };

  return (
    <div className="flex flex-col gap-[44px] justify-center items-center">
      <img src={acoMent} alt="아코_파일" />
      <UploadButton onFileSelect={handleFileSelect} />
      <button
        onClick={handleSubmit}
        disabled={!selectedFile}
        className={`w-[151px] h-[50px] rounded-[20px] bg-blue-500 text-white font-semibold text-xl flex items-center justify-center ${!selectedFile ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        제출하기
      </button>
    </div>
  );
};

export default NonFileChart;
