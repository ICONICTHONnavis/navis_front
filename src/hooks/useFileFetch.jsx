import { useState } from 'react';
import { defaultInstance } from '../api/instance';

const useFileFetch = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = JSON.parse(localStorage.getItem('auth')) || {};

  const handleFileChange = file => {
    console.log('선택된 파일:', file);
    setSelectedFile(file);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      alert('업로드할 파일을 선택해 주세요.');
      return false; // 업로드 실패
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('studentNumber', auth.studentNumber);

      const response = await defaultInstance.post('/akoMain/uploadEx', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      if (response.status === 200) {
        console.log('파일 업로드 성공');
        return true; // 업로드 성공
      } else {
        console.log('서버 오류가 발생했습니다');
      }
    } catch (err) {
      setError(err.response ? err.response.data : '네트워크 오류가 발생했습니다');
      console.error('파일 업로드 실패:', err);
    } finally {
      setLoading(false);
    }
    return false; // 업로드 결과가 실패
  };

  return { selectedFile, handleFileChange, uploadFile, loading, error };
};

export default useFileFetch;
