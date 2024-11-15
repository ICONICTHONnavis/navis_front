import React from 'react';
import acoHeart from '../../assets/images/aco_heart.svg';
import ChatButton from '../../components/main/ChatButton';
import CustomButton from '../../components/main/CustomButton';
import NonLoginComponent from '../../components/login/NonLoginComponent';
import { useAuth } from '../../context/AuthContext';

function Main() {
  const { isLogin } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-[38px]">
        <p className="text-[80px] tracking-[-1.6px]">Hello, NAVIS</p>
        <img src={acoHeart} alt="아코_하트" />
        {isLogin ? (
          <>
            <ChatButton />
            <div className="flex flex-row gap-[87px] justify-center items-center">
              <CustomButton label />
              <CustomButton />
            </div>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <NonLoginComponent />
        )}
      </div>
    </div>
  );
}

export default Main;
