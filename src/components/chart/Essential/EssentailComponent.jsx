import React, { useEffect, useState } from 'react';
import EssentialList from './EssentialList';
import useRequireFetch from '../../../hooks/useRequireFetch';

const EssentailComponent = () => {
  const [majorInfo, setMajorInfo] = useState([]);
  const [notMajorInfo, setNotMajorInfo] = useState([]);

  const { requireInfo, getRequireInfo, loading } = useRequireFetch();

  useEffect(() => {
    getRequireInfo();
  }, []);

  useEffect(() => {
    if (requireInfo.length > 0) {
      const majors = requireInfo.filter(item => item.isMajor);
      const notMajors = requireInfo.filter(item => !item.isMajor);

      setMajorInfo(majors);
      setNotMajorInfo(notMajors);
    }
  }, [requireInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-[1187px] px-[45px] py-[33px] rounded-[20px] bg-essentialLinear gap-[35px]">
      <p className="text-brown-500 text-[40px] font-bold tracking-[-2px]">필수 과목 이수체계도</p>
      <div className="flex flex-row items-start gap-[91px]">
        <EssentialList name="필수 전공" subjects={majorInfo} />
        <EssentialList name="필수 교양" subjects={notMajorInfo} />
      </div>
    </div>
  );
};

export default EssentailComponent;
