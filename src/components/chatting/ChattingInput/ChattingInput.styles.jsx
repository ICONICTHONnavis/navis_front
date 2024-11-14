import { styled } from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: auto;
  min-width: 600px;
  background-color: var(--white);
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #8c8c8c;
  border-radius: 18px;
  padding: 10px 15px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TextInput = styled.textarea`
  border: none;
  background: none;
  outline: 0;
  width: 100%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  resize: none;
  margin: 0px;
  padding: 0px;
  max-height: 300px;
  font-size: 16px;
  line-height: 20px;

  &::placeholder {
    color: var(--color-gray5);
  }
`;

export const SubmitButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  padding: 0;

  img {
    width: 19px;
    height: 19px;
  }
`;
