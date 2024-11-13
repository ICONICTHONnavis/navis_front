import React from 'react';
import ScoreLeftComponent from './ScoreLeftComponent';
import ScoreRightComponent from './ScoreRightComponent';
import UploadButton from '../UploadButton';
import useFileFetch from '../../../hooks/useFileFetch';

const ScoreComponent = ({ scoreValue }) => {
  const { uploadFile, handleFileChange } = useFileFetch();

  const handleFileSelect = file => {
    handleFileChange(file);
    uploadFile();
  };

  return (
    <div className="relative flex flex-row w-[1169px] h-[421px]">
      <ScoreLeftComponent scoreValue={scoreValue} />
      <ScoreRightComponent scoreValue={scoreValue} />
      <div className="absolute bottom-0 right-0">
        <UploadButton onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
};

export default ScoreComponent;
