import React from 'react';
import BigChart from '../Chart/BigChart';

const ScoreRightComponent = ({ scoreValue }) => {
  const totalCredits =
    scoreValue.graduateRequirements && scoreValue.graduateRequirements.length > 0
      ? scoreValue.graduateRequirements[0].requiredTotalCredits
      : 0; // 기본값

  const completedCredits =
    scoreValue.completedCredits && scoreValue.completedCredits.totalCredits
      ? scoreValue.completedCredits.totalCredits
      : 0; // 기본값

  const totalScore = {
    total: totalCredits,
    complete: completedCredits,
  };

  return (
    <div className="relative flex flex-col w-[395px] h-[334px] mt-[47px] justify-center items-center">
      <p className="text-3xl text-center text-brown-500 font-bold mb-2">졸업 전체 학점</p>
      <div className="flex flex-row gap-[170px] mr-9">
        <p className="text-[26px] font-semibold text-brown-100">총 {totalScore.total}학점</p>
        <p className="text-[26px] font-semibold text-lightGreen">{totalScore.complete}학점</p>
      </div>
      <BigChart totalScore={totalScore} />
      <div className="absolute flex flex-col items-center top-[165px]">
        <div className="flex flex-row gap-1">
          <p className="text-[50px] font-semibold">{totalScore.complete}</p>
          <p className="text-[32px] font-semibold mt-1">/{totalScore.total}</p>
        </div>
        <p className="text-[32px] text-gray">학점</p>
      </div>
    </div>
  );
};

export default ScoreRightComponent;
