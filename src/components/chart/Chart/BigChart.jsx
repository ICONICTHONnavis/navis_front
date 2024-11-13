import { ResponsivePie } from '@nivo/pie';
import React from 'react';

const BigChart = () => {
  const data = [
    { id: '수강 학점', value: 98 },
    { id: '남은 학점', value: 32 },
  ];

  return (
    <ResponsivePie
      data={data}
      innerRadius={0.85}
      padAngle={0.7}
      cornerRadius={1}
      colors={['#DBE5B2', '#D9D9D9']}
      borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
    />
  );
};

export default BigChart;
