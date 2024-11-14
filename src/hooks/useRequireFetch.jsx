import { useState } from 'react';
import { defaultInstance } from '../api/instance';

const useRequireFetch = () => {
  const [requireInfo, setRequireInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = JSON.parse(localStorage.getItem('auth'));
  const studentNumber = auth ? auth.studentNumber : '';

  const url = `/require/${studentNumber}`;

  const getRequireInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await defaultInstance.get(`${url}`);

      if (response.data && response.data.responseDto) {
        setRequireInfo(response.data.responseDto);
      } else {
        console.error('응답 형식이 잘못되었습니다');
        throw new Error('응답 형식이 잘못되었습니다');
      }
    } catch (err) {
      setError(err.response ? err.response.data : '필수 과목 정보 받아오기 실패');
      console.error('필수 과목 정보 받아오기 실패:', err);
    } finally {
      setLoading(false);
    }
  };

  return { requireInfo, getRequireInfo, loading, error };
};

export default useRequireFetch;
