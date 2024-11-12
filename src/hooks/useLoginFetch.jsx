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

      console.log('로그인 성공:', response.data);
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
