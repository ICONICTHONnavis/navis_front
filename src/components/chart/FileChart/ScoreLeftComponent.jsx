import React from 'react';
import SmallChart from '../Chart/SmallChart';

const ScoreLeftComponent = ({ scoreValue }) => {
  const auth = JSON.parse(localStorage.getItem('auth')) || {};

  const graduateRequirements =
    scoreValue.graduateRequirements && scoreValue.graduateRequirements.length > 0
      ? scoreValue.graduateRequirements[0]
      : null;

  const scoreData = graduateRequirements
    ? [
        {
          label: '공통 교양',
          total: graduateRequirements.commonCredits || 0,
          complete: scoreValue.completedCredits?.common || 0,
        },
        {
          label: '지정 교양',
          total: graduateRequirements.generalCredits || 0,
          complete: scoreValue.completedCredits?.general || 0,
        },
        {
          label: '전공',
          total: graduateRequirements.majorCredits || 0,
          complete: scoreValue.completedCredits?.major || 0,
        },
      ]
    : [];

  return (
    <div className="flex flex-col w-[594px] h-[371px] justify-between mr-[52px]">
      <p className="text-brown-500 text-[40px] font-bold tracking-[-2px] whitespace-pre">
        {auth.studentName ? `${auth.studentName}님의\n총 취득 학점` : '로그인 해주세요.'}
      </p>
      <div className="flex flex-row gap-[54px]">
        {scoreData.map(score => (
          <SmallChart
            key={score.label}
            label={score.label}
            total={score.total}
            complete={score.complete}
          />
        ))}
      </div>
    </div>
  );
};

export default ScoreLeftComponent;
