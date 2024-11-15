import React, { useState } from 'react';
import InputText from './components/InputText';
import SelectSection from './components/SelectSection';
import { useUserHook } from '../../api/user/user';
import { useNavigate } from 'react-router-dom';
import * as S from './InputArea.styles';

function InputArea() {
  const [formData, setFormData] = useState({
    studentNumber: '',
    userPassword: '',
    passwordConfirm: '',
    userName: '',
    college: '',
    major: '',
  });
  const [isIdChecked, setIsIdChecked] = useState(false);
  const navigate = useNavigate();
  const { signUpUser, checkId } = useUserHook();

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDuplicateCheck = async () => {
    if (!formData.studentNumber) {
      alert('학번을 입력해주세요.');
      return;
    }

    try {
      const result = await checkId(formData.studentNumber);
      if (result.success) {
        alert('사용 가능한 학번입니다.');
        setIsIdChecked(true);
      } else {
        alert('이미 사용 중인 학번입니다.');
        setIsIdChecked(false);
      }
    } catch (error) {
      alert('중복 확인 중 오류가 발생했습니다. 다시 시도해 주세요.');
      console.error('Error:', error);
    }
  };

  const handleSubmit = async () => {
    if (!isIdChecked) {
      alert('학번 중복 확인을 해주세요.');
      return;
    }

    if (formData.userPassword !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    console.log(formData);

    try {
      await signUpUser(formData);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다: ' + error.message);
    }
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Title>학번</S.Title>
        <S.DuplicateArea>
          <InputText
            type="text"
            message="학번을 입력해주세요.."
            value={formData.studentNumber}
            onChange={value => handleInputChange('studentNumber', value)}
          />
          <S.DuplicateButton onClick={handleDuplicateCheck}>중복확인</S.DuplicateButton>
        </S.DuplicateArea>
      </S.InputContainer>

      <S.InputContainer>
        <S.Title>비밀번호</S.Title>
        <InputText
          type="password"
          message="비밀번호를 영문 숫자 혼합하여 입력해주세요.."
          value={formData.userPassword}
          onChange={value => handleInputChange('userPassword', value)}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.Title>비밀번호 확인</S.Title>
        <InputText
          type="password"
          message="비밀번호를 다시 한번 입력해주세요.."
          value={formData.passwordConfirm}
          onChange={value => handleInputChange('passwordConfirm', value)}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.Title>이름</S.Title>
        <InputText
          type="text"
          message="이름을 입력하세요.."
          value={formData.userName}
          onChange={value => handleInputChange('userName', value)}
        />
      </S.InputContainer>

      <SelectSection
        selectedCollege={formData.college}
        selectedMajor={formData.major}
        onCollegeChange={value => handleInputChange('college', value)}
        onMajorChange={value => handleInputChange('major', value)}
      />

      <S.StyledButton onClick={handleSubmit}>회원가입</S.StyledButton>
    </S.Container>
  );
}

export default InputArea;
