import React from 'react';
import ScoreLeftComponent from './ScoreLeftComponent';
import ScoreRightComponent from './ScoreRightComponent';

const ScoreComponent = ({ scoreValue }) => {
  return (
    <div className="relative flex flex-row w-[1169px] h-[421px]">
      <ScoreLeftComponent scoreValue={scoreValue} />
      <ScoreRightComponent scoreValue={scoreValue} />
    </div>
  );
};

export default ScoreComponent;
