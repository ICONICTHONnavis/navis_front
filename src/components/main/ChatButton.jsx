import React from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../../assets/images/chatt.svg';

const ChatButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-[598px] h-[49px] rounded-[70px] bg-brown-600/40 border border-[#B9B9B9] justify-center items-center gap-[86px]">
      <p className="text-[20px] font-normal tracking-[-1px] text-brown-100">
        안녕, 오랜만이야 요즘 학교 생활은 어때?
      </p>
      <button
        type="button"
        className="flex flex-row justify-center items-center rounded-[70px] w-[154px] h-[35px] bg-brown-100/70 gap-2"
        onClick={() => navigate('/chatting')}
      >
        <p className="text-[20px] font-medium text-[#fff]">start chat</p>
        <img src={chat} alt="chat" />
      </button>
    </div>
  );
};

export default ChatButton;
