import React, { useState, useEffect } from 'react';
import * as S from './SelectSection.styles';

// Sample data for colleges and majors
const collegeData = {
  공과대학: [
    '전자전기공학부',
    '정보통신공학과',
    '건설환경공학과',
    '화공생물공학과',
    '기계로봇에너지공학과',
    '건축공학부',
    '산업시스템공학과',
    '에너지신소재공학과',
  ],
  AI융합대학: ['컴퓨터공학과', '멀티미디어소프트웨어전공', '인공지능전공'],
};

function SelectSection({ selectedCollege, selectedMajor, onCollegeChange, onMajorChange }) {
  const [majors, setMajors] = useState([]);

  // Update majors when the selected college changes
  useEffect(() => {
    if (selectedCollege) {
      setMajors(collegeData[selectedCollege] || []);
    } else {
      setMajors([]);
    }
  }, [selectedCollege]);

  return (
    <S.Container>
      {/* College Dropdown */}
      <label htmlFor="college">소속 단과 대학 *</label>
      <select id="college" value={selectedCollege} onChange={e => onCollegeChange(e.target.value)}>
        <option value="" disabled>
          소속 단과 대학
        </option>
        {Object.keys(collegeData).map(college => (
          <option key={college} value={college}>
            {college}
          </option>
        ))}
      </select>

      {/* Major Dropdown */}
      <label htmlFor="major">전공 *</label>
      <select
        id="major"
        value={selectedMajor}
        onChange={e => onMajorChange(e.target.value)}
        disabled={!selectedCollege}
      >
        <option value="" disabled>
          전공
        </option>
        {majors.map(major => (
          <option key={major} value={major}>
            {major}
          </option>
        ))}
      </select>
    </S.Container>
  );
}

export default SelectSection;
