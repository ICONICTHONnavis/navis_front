import React from 'react';
import SmallChart from '../Chart/SmallChart';

const ScoreLeftComponent = () => {
  const auth = JSON.parse(localStorage.getItem('auth')) || {};

  const scoreArr = ['공통 교양', '일반 교양', '전공'];

  return (
    <div className="flex flex-col w-[594px] h-[371px] justify-between mr-[52px]">
      <p className="text-brown-500 text-[40px] font-bold tracking-[-2px] whitespace-pre">
        {auth.studentName ? `${auth.studentName}님의\n총 취득 학점` : '로그인 해주세요.'}
      </p>
      <div className="flex flex-row gap-[54px]">
        {scoreArr.map(score => (
          <SmallChart key={score} label={score} />
        ))}
      </div>
    </div>
  );
};

export default ScoreLeftComponent;
