import React from 'react';
import ScoreLeftComponent from './ScoreLeftComponent';
import ScoreRightComponent from './ScoreRightComponent';
import UploadButton from '../UploadButton';

const ScoreComponent = () => {
  return (
    <div className="relative flex flex-row w-[1169px] h-[421px]">
      <ScoreLeftComponent />
      <ScoreRightComponent />
      <div className="absolute bottom-0 right-0">
        <UploadButton />
      </div>
    </div>
  );
};

export default ScoreComponent;
