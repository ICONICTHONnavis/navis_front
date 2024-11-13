import React from 'react';
import ClassDiv from './ClassDiv';

const EssentialList = ({ name }) => {
  return (
    <div className="flex flex-col gap-[17px]">
      <p className="text-[26px] font-semibold text-brown-100 tracking-[-2.1px]">{name}</p>
      <ClassDiv />
    </div>
  );
};

export default EssentialList;
