import React from 'react';

const LoginInput = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col tracking-[-1.1px]">
      <p className="font-semibold text-[20px]">{label}</p>
      <input
        type={label === '비밀번호' ? 'password' : 'text'}
        className="placeholder:black w-[585px] h-[50px] text-[18px] border-b border-b-brown-100 outline-none text-black font-normal px-2"
        placeholder={`${label}를 입력해주세요`}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginInput;
