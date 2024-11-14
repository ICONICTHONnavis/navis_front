import React from 'react';
import * as S from './InputText.styles';

function InputText({ name, type, message, value, onChange }) {
  const handleInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <S.InputStyle
      type={type}
      placeholder={message}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
}

export default InputText;
