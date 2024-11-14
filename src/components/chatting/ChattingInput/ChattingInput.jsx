import React, { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoadingState, messageState } from '../../../recoil/chatting/chattingRecoilState';
import useInput from '../../../hooks/useInput';
import submitButtonIcon from '../../../assets/images/submitButtonIcon.svg';
import * as S from './ChattingInput.styles';
import { useChattingHooks } from '../../../api/chatting/chatting';

function ChattingInput() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const setMessages = useSetRecoilState(messageState);
  const input = useInput('');
  const textareaRef = useRef(null);
  const { fetchChattingAnswer } = useChattingHooks();

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const newMessage = {
        messageId: Date.now(),
        messageQuestion: input.value,
        messageCreateAt: new Date().toISOString(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      console.log(input.value);

      const chattingResponse = await fetchChattingAnswer(input.value);
      // const chattingResponse = {
      //   responseDto: {
      //     chattingAnswer: 'fuck',
      //   },
      //   error: null,
      //   success: true,
      // };

      const messageAnswer = {
        messageId: Date.now() + 1,
        messageAnswer: chattingResponse.data.responseDto.chattingAnswer,
        messageCreateAt: new Date().toISOString(),
      };

      setMessages(prevMessages => [...prevMessages, messageAnswer]);

      input.reset();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input.value]);

  return (
    <S.Container>
      <S.InputContainer onSubmit={handleSubmit} data-tour="chattingInput">
        <S.Input>
          <S.TextInput
            value={input.value}
            onChange={input.onChange}
            onKeyDown={handleKeyDown}
            placeholder={'채팅을 입력하세요..'}
            ref={textareaRef}
            rows={1}
            disabled={isLoading}
          />
          <S.SubmitButton type="submit" disabled={isLoading}>
            <img src={submitButtonIcon} alt="submit" />
          </S.SubmitButton>
        </S.Input>
      </S.InputContainer>
    </S.Container>
  );
}

export default ChattingInput;
