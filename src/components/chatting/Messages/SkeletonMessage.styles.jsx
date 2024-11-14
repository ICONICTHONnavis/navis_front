import { keyframes, styled } from 'styled-components';

export const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div`
  display: inline;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const SkeletonMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SkeletonText = styled.div`
  margin-top: 12px;
  display: block;
  width: 100%;
  height: 1rem;
  background: linear-gradient(90deg, var(--color-gray3), var(--color-gray4));
  background-size: 200% 100%;
  animation: ${loadingAnimation} 2s infinite;
  border-radius: 4px;
`;
