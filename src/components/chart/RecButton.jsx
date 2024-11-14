import React from 'react';
import { useNavigate } from 'react-router-dom';
import question from '../../assets/images/question_mark.svg';
import { useChattingHooks } from '../../api/chatting/chatting';

const RecButton = () => {
  const navigate = useNavigate();
  const { recommendSubject } = useChattingHooks();

  const handleClick = async () => {
    try {
      await recommendSubject();
      navigate('/chatting');
    } catch (error) {
      console.error('Error recommending subject:', error);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      <img src={question} alt="추천 버튼" />
    </button>
  );
};

export default RecButton;
