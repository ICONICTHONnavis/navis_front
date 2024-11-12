import React from 'react';
import LoginInput from '../../components/login/LoginInput';
import CustomButton from '../../components/login/CustomButton';
import { useNavigate } from 'react-router-dom';
import useLoginFetch from '../../hooks/useLoginFetch';

function Login() {
  const navigate = useNavigate();
  const login = useLoginFetch();

  const onClickSignUp = () => {
    navigate('/signup');
  };

  const handlePressLogin = async () => {
    await login.login();
    if (!login.error) {
      navigate('/');
    }
  };

  const isLoginButtonDisabled = !login.loginValue.id || !login.loginValue.password;

  return (
    <div className="flex w-screen h-screen bg-login bg-center bg-no-repeat bg-cover justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[76px]">
        <p className="font-extrabold text-5xl">로그인</p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-9">
            <LoginInput label="아이디" {...login.getTextInputProps('id')} />
            <LoginInput label="비밀번호" {...login.getTextInputProps('password')} />{' '}
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <CustomButton
            name="로그인"
            bg
            onClickMethod={handlePressLogin}
            disabled={isLoginButtonDisabled}
          />
          <CustomButton name="회원가입" onClickMethod={onClickSignUp} />
        </div>
      </div>
    </div>
  );
}

export default Login;
