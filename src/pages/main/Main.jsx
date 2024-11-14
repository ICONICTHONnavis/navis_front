import React from 'react';
import acoHeart from '../../assets/images/aco_heart.svg';
import ChatButton from '../../components/main/ChatButton';
import CustomButton from '../../components/main/CustomButton';

function Main() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-[38px]">
        <p className="text-[80px] tracking-[-1.6px]">Hello, NAVIS</p>
        <img src={acoHeart} alt="아코_하트" />
        <ChatButton />
        <div className="flex flex-row gap-[87px] justify-center items-center">
          <CustomButton label />
          <CustomButton />
        </div>
      </div>
    </div>
  );
}

export default Main;
