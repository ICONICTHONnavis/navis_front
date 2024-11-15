import React, { useEffect, useRef } from 'react';
import * as S from './ChattingMessages.styles';
import { useRecoilValue } from 'recoil';
import MarkdownRenderer from './MarkdownRender';
import SkeletonMessage from './SkeletonMessage';
import navisChattingProfile from '../../../assets/images/chattingAco.svg';
import { isLoadingState, messageState } from '../../../recoil/chatting/chattingRecoilState';

function ChattingMessages() {
  const messages = useRecoilValue(messageState);
  const isLoading = useRecoilValue(isLoadingState);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <S.MessagesContainer>
      {messages.map((message, index) => (
        <div key={message.chatId || index}>
          <S.SendMessage>
            {message.messageQuestion && <S.Message>{message.messageQuestion}</S.Message>}
          </S.SendMessage>
          {message.messageAnswer && (
            <S.ReceiveMessage>
              <S.PromaChattingProfile>
                <img src={navisChattingProfile} alt="navis profile" />
              </S.PromaChattingProfile>
              <S.ReceiveMessageText>
                <MarkdownRenderer text={message.messageAnswer} />
              </S.ReceiveMessageText>
            </S.ReceiveMessage>
          )}
        </div>
      ))}
      {isLoading && (
        <S.ReceiveMessage>
          <S.PromaChattingProfile>
            <img src={navisChattingProfile} alt="navis profile" />
          </S.PromaChattingProfile>

          <SkeletonMessage />
        </S.ReceiveMessage>
      )}
      <div ref={messagesEndRef} />
    </S.MessagesContainer>
  );
}

export default ChattingMessages;
