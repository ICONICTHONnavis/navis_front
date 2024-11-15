import React from 'react';
import * as S from './Signup.styles';
import InputArea from '../../components/signup/InputArea';

function Signup() {
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <InputArea />
    </S.Container>
  );
}

export default Signup;
