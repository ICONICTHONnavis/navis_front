import { useState } from 'react';
import { defaultInstance } from '../api/instance';

const useLoginFetch = () => {
  const [loginValue, setLoginValue] = useState({ id: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeInput = (name, value) => {
    setLoginValue(preValues => ({
      ...preValues,
      [name]: value,
    }));
  };

  const getTextInputProps = name => {
    const value = loginValue[name];
    const onChange = event => {
      handleChangeInput(name, event.target.value);
    };

    return { value, onChange };
  };

  const login = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await defaultInstance.post('/login', {
        studentNumber: loginValue.id,
        password: loginValue.password,
      });

      if (response.data && response.data.responseDto) {
        localStorage.setItem('auth', JSON.stringify(response.data.responseDto));
        return true; // 로그인 성공 시 true 반환
      } else {
        throw new Error('응답 형식이 잘못되었습니다');
      }
    } catch (err) {
      setError(err.response ? err.response.data : '로그인 실패');
      console.error('로그인 실패:', err);
      return false; // 로그인 실패 시 false 반환
    } finally {
      setLoading(false);
    }
  };

  return { loginValue, getTextInputProps, login, loading, error };
};

export default useLoginFetch;
