import { styled } from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  border-bottom: 1px solid #795548;
  outline: none;
  color: black;
  font-weight: normal;
  padding-left: 8px;
  padding-right: 8px;

  &::placeholder {
    color: black;
  }
`;
