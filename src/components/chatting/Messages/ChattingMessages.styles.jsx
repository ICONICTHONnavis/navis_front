import { styled } from 'styled-components';

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  padding-right: 20%;
  padding-left: 20%;
  min-width: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f4e0c8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(103, 87, 75);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const Message = styled.div`
  display: inline-flex;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: #ffcc80;
  color: var(--gray-8);
  padding: 10px 15px;
  width: auto;
  max-width: 70%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const SendMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const PromaChattingProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px var(--color-gray3);
`;

export const ReceiveMessage = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin: 30px 0;
`;

export const ReceiveMessageText = styled(Message)`
  width: auto;
  background-color: #f8e8d5;
  position: relative;
  color: #000;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: #f8e8d5 transparent transparent transparent;
  }
`;
