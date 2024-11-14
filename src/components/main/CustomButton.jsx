import React from 'react';
import graduate from '../../assets/images/graduate_circle.svg';
import table from '../../assets/images/table_circle.svg';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ label }) => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('auth')) || {};

  const labelInfo = [
    { label: `${auth.studentName}님의 취득 학점`, icon: graduate, url: '/chart' },
    { label: '24-2학기 시간표', icon: table, url: '/table' },
  ];

  return (
    <button
      type="button"
      onClick={() => navigate(label ? labelInfo[0].url : labelInfo[1].url)}
      className="flex flex-col gap-[9px] h-[98px] items-center justify-center"
    >
      <img className="w-[60px] h-[60px]" src={label ? labelInfo[0].icon : labelInfo[1].icon} />
      <p className="text-brown-100 font-semibold text-[24px]">
        {label ? labelInfo[0].label : labelInfo[1].label}
      </p>
    </button>
  );
};

export default CustomButton;
