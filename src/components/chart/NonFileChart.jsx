import React from 'react';
import acoMent from '../../assets/images/aco_ment.svg';
import UploadButton from './UploadButton';
import useFileFetch from '../../hooks/useFileFetch';
import useScoreFetch from '../../hooks/useScoreFetch';

const NonFileChart = () => {
  const { uploadFile, handleFileChange, selectedFile, error } = useFileFetch();
  const { getScoreInfo } = useScoreFetch();

  const handleFileSelect = file => {
    handleFileChange(file);
  };

  const handleSubmit = async () => {
    const uploadSuccess = await uploadFile();
    if (!error && uploadSuccess) {
      getScoreInfo();
    }
  };

  return (
    <div className="flex flex-col gap-[44px] justify-center items-center">
      <img src={acoMent} alt="아코_파일" />
      <div className="flex flex-col gap-5">
        <UploadButton onFileSelect={handleFileSelect} />
        <button
          onClick={handleSubmit}
          disabled={!selectedFile}
          className={`font-semibold text-xl flex items-center justify-center ${!selectedFile ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          제출하기
        </button>
      </div>
    </div>
  );
};

export default NonFileChart;
