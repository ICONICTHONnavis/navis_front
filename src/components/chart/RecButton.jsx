import React from 'react';
import { useNavigate } from 'react-router-dom';
import question from '../../assets/images/question_mark.svg';

const RecButton = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('/chatting')}>
      <img src={question} alt="추천 버튼" />
    </button>
  );
};

export default RecButton;
