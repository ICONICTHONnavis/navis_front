import React from 'react';
import * as S from './LoadingModal.styles';

const LoadingModal = () => {
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Spinner />
        <S.LoadingText>추천 중입니다...</S.LoadingText>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default LoadingModal;
