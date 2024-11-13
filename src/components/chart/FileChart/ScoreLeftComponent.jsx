import React from 'react';
import SmallChart from '../Chart/SmallChart';
import { useRecoilValue } from 'recoil';
import { authState } from '../../../recoil/user/authState';

const ScoreLeftComponent = () => {
  const auth = useRecoilValue(authState);
  const scoreArr = ['공통 교양', '일반 교양', '전공'];

  return (
    <div className="flex flex-col w-[594px] h-[371px] justify-between mr-[52px]">
      <p className="text-brown-500 text-[40px] font-bold tracking-[-2px] whitespace-pre">
        {auth.studentName}님의{'\n'}총 취득 학점
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
