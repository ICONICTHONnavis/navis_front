import styled from 'styled-components';
import backgroundImage from '../../assets/images/aco_heart.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow-y: hidden;
  margin-top: 2vh;
  height: 98vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`;
