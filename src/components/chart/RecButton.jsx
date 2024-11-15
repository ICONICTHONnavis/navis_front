import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import question from '../../assets/images/question_mark.svg';
import { useChattingHooks } from '../../api/chatting/chatting';
import LoadingModal from './LoadingModal/LoadingModal';

const RecButton = () => {
  const navigate = useNavigate();
  const { recommendSubject } = useChattingHooks();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await recommendSubject();
      navigate('/chatting');
    } catch (error) {
      console.error('Error recommending subject:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        <img src={question} alt="추천 버튼" />
      </button>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default RecButton;
