import { useState } from 'react';
import { defaultInstance } from '../api/instance';

const useScoreFetch = () => {
  const [scoreValue, setScoreValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = JSON.parse(localStorage.getItem('auth'));
  const studentNumber = auth ? auth.studentNumber : '';

  const url = `/akoMain/${studentNumber}`;

  const getScoreInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await defaultInstance.get(`${url}`);

      if (response.data && response.data.responseDto) {
        setScoreValue(response.data.responseDto);
      } else {
        console.error('응답 형식이 잘못되었습니다');
        throw new Error('응답 형식이 잘못되었습니다');
      }
    } catch (err) {
      setError(err.response ? err.response.data : '학점 정보 받아오기 실패');
      console.error('학점 정보 받아오기 실패:', err);
    } finally {
      setLoading(false);
    }
  };

  return { scoreValue, getScoreInfo, loading, error };
};

export default useScoreFetch;
