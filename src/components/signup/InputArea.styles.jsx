import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 585px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  width: 386px;
  height: 69px;
  font-weight: 600;
  font-size: 30px;
  color: #867060;
  border-radius: 30px;
  letter-spacing: -2.1px;
  background-color: #f4e0c8;
  border: 1px solid #f4e0c8;
`;

export const DuplicateArea = styled.div`
  display: flex;
`;

export const DuplicateButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: rgba(134, 112, 96, 0.7);
  color: white;
  border-radius: 20px;
  box-shadow:
    0px 6px 8px rgba(0, 0, 0, 0.2),
    0px 3px 4px rgba(0, 0, 0, 0.1);
`;
