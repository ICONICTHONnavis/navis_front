import React from 'react';
import * as S from './Main.styles';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/user/authState';

function Main() {
  const auth = useRecoilValue(authState);
  return (
    <S.MainWrapper>
      <S.MainTitle>대충 몸통임</S.MainTitle>
      <S.MainDescription>{auth.studentName}</S.MainDescription>
      <a href="/chart">이동</a>
    </S.MainWrapper>
  );
}

export default Main;
