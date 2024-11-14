import React from 'react';
import ScoreLeftComponent from './ScoreLeftComponent';
import ScoreRightComponent from './ScoreRightComponent';
import UploadButton from '../UploadButton';
import useFileFetch from '../../../hooks/useFileFetch';

const ScoreComponent = ({ scoreValue }) => {
  const { uploadFile, handleFileChange, selectedFile } = useFileFetch();

  const handleFileSelect = file => {
    handleFileChange(file);
  };

  const handleSubmit = async () => {
    await uploadFile();
  };

  return (
    <div className="relative flex flex-row w-[1169px] h-[421px]">
      <ScoreLeftComponent scoreValue={scoreValue} />
      <ScoreRightComponent scoreValue={scoreValue} />
      <div className="absolute bottom-0 right-0">
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
    </div>
  );
};

export default ScoreComponent;
