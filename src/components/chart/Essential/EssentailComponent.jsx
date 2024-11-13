import React from 'react';
import EssentialList from './EssentialList';

const EssentailComponent = () => {
  return (
    <div className="flex flex-col w-[1187px] px-[45px] py-[33px] rounded-[20px] bg-essentialLinear gap-[35px]">
      <p className="text-brown-500 text-[40px] font-bold tracking-[-2px]">필수 과목 이수체계도</p>
      <div className="flex flex-row items-start gap-[91px]">
        <EssentialList name="필수 전공" />
        <EssentialList name="필수 교양" />
      </div>
    </div>
  );
};

export default EssentailComponent;
