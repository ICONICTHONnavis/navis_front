import { sendRequest } from '../request';
import { aiChatInstance, defaultInstance } from '../instance';
import { useSetRecoilState } from 'recoil';
import { messageState } from '../../recoil/chatting/chattingRecoilState';

export const useChattingHooks = () => {
  const setChatList = useSetRecoilState(messageState);
  const getChatList = async () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const studentNumber = auth ? auth.studentNumber : '';

    const response = await sendRequest(defaultInstance, 'get', `chat/${studentNumber}`);

    setChatList(response.data.responseDto);

    return response;
  };
  const fetchChattingAnswer = async messageQuestion => {
    const response = await sendRequest(aiChatInstance, 'post', `chat/question`, {
      studentNumber: 2020112030,
      chattingQuestion: messageQuestion,
    });

    return response;
  };

  return {
    fetchChattingAnswer,
    getChatList,
  };
};
