import React from 'react';
import * as S from './SkeletonMessage.styles';

function SkeletonMessage() {
  return (
    <S.SkeletonContainer>
      <S.SkeletonMessage>
        <S.SkeletonText></S.SkeletonText>
        <S.SkeletonText></S.SkeletonText>
      </S.SkeletonMessage>
    </S.SkeletonContainer>
  );
}

export default SkeletonMessage;
