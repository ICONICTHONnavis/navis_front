import React, { useState } from 'react';
import * as S from './Chatting.styles';
import { useRecoilValue } from 'recoil';
import ChattingMain from '../../components/chatting/ChattingMain';
import ChattingMessages from '../../components/chatting/Messages/ChattingMessages';
import ChattingInput from '../../components/chatting/ChattingInput/ChattingInput';
import { messageState } from '../../recoil/chatting/chattingRecoilState';
import { useChattingHooks } from '../../api/chatting/chatting';

function Chatting() {
  const messages = useRecoilValue(messageState);
  const { getChatList } = useChattingHooks();
  const [isFirst, setFirst] = useState(true);

  if (isFirst) {
    getChatList();
    setFirst(false);
  }

  return (
    <S.Container>
      {messages.length === 0 ? (
        <ChattingMain /> // messages가 비어 있을 때 ChattingMain 컴포넌트 렌더링
      ) : (
        <ChattingMessages />
      )}
      <ChattingInput />
    </S.Container>
  );
}

export default Chatting;
