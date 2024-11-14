import { styled } from 'styled-components';
import backgroundImage from '../../assets/images/backgroundImg.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.p`
  margin-top: 5%;
  font-size: 48px;
  font-weight: bold;
`;
