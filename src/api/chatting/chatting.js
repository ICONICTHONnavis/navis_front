import { sendRequest } from '../request';
import { aiChatInstance, defaultInstance } from '../instance';
import { useSetRecoilState } from 'recoil';
import { messageState } from '../../recoil/chatting/chattingRecoilState';

export const useChattingHooks = () => {
  const setChatList = useSetRecoilState(messageState);
  const auth = JSON.parse(localStorage.getItem('auth'));
  const studentNumber = auth ? auth.studentNumber : '';
  const getChatList = async () => {
    const response = await sendRequest(defaultInstance, 'get', `chat/${studentNumber}`);

    setChatList(response.data.responseDto);

    return response;
  };
  const fetchChattingAnswer = async messageQuestion => {
    const response = await sendRequest(aiChatInstance, 'post', `chat/question`, {
      studentNumber: studentNumber,
      chattingQuestion: messageQuestion,
    });

    return response;
  };

  return {
    fetchChattingAnswer,
    getChatList,
  };
};
