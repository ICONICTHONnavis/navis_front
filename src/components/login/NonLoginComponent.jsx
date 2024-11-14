import React from 'react';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

const NonLoginComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[18px]">
      <CustomButton name="로그인" bg onClickMethod={() => navigate('/login')} />
      <CustomButton name="회원가입" onClickMethod={() => navigate('/signup')} />
    </div>
  );
};

export default NonLoginComponent;
