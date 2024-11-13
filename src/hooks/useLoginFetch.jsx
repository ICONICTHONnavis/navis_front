import { useState } from 'react';
import { defaultInstance } from '../api/instance';
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil/user/authState';

const useLoginFetch = () => {
  const [loginValue, setLoginValue] = useState({ id: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setAuth = useSetRecoilState(authState);

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
        setAuth(response.data.responseDto);
      } else {
        console.error('응답 형식이 잘못되었습니다');
        throw new Error('응답 형식이 잘못되었습니다');
      }
    } catch (err) {
      setError(err.response ? err.response.data : '로그인 실패');
      console.error('로그인 실패:', err);
    } finally {
      setLoading(false);
    }
  };
  return { loginValue, getTextInputProps, login, loading, error };
};

export default useLoginFetch;
