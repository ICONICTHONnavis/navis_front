import React from 'react';
import ScoreLeftComponent from './ScoreLeftComponent';
import ScoreRightComponent from './ScoreRightComponent';
import UploadButton from '../UploadButton';

const ScoreComponent = ({ scoreValue }) => {
  return (
    <div className="relative flex flex-row w-[1169px] h-[421px]">
      <ScoreLeftComponent scoreValue={scoreValue} />
      <ScoreRightComponent scoreValue={scoreValue} />
      <div className="absolute bottom-0 right-0">
        <UploadButton />
      </div>
    </div>
  );
};

export default ScoreComponent;
