import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const SmallChart = ({ label, total, complete }) => {
  const data = [
    { id: '수강 학점', value: complete ? complete : 0 },
    { id: '남은 학점', value: total - complete ? total - complete : 0 },
  ];

  return (
    <div className="relative flex flex-col w-[160px] h-[205px] justify-center items-center gap-[15px]">
      <p className="font-bold text-brown-500 text-[25px]">{label}</p>
      <ResponsivePie
        data={data}
        innerRadius={0.85}
        padAngle={0.7}
        cornerRadius={1}
        colors={['#C3DDF7', '#D9D9D9']}
        borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
      />
      <div className="absolute flex flex-col items-center top-[95px]">
        <div className="flex flex-row gap-1">
          <p className="text-4xl font-semibold">{complete}</p>
          <p className="text-lg font-semibold">/{total}</p>
        </div>
        <p className="text-lg text-gray mt-[-6px]">학점</p>
      </div>
    </div>
  );
};

export default SmallChart;
