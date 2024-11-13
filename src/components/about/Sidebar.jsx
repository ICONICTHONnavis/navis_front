import React, { useState } from 'react';
import acoFace from '../../assets/images/aco_face.svg';
import home from '../../assets/images/home.svg';
import homeActive from '../../assets/images/home_active.svg';
import chart from '../../assets/images/chart.svg';
import chartActive from '../../assets/images/chart_active.svg';
import chat from '../../assets/images/chat.svg';
import chatActive from '../../assets/images/chat_active.svg';
import table from '../../assets/images/table.svg';
import tableActive from '../../assets/images/table_active.svg';
import SidebarButton from './SidebarButton';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (index, path) => {
    setActiveButton(index);
    navigate(path);
  };

  return (
    <div className="flex flex-col w-[100px] h-[913px] rounded-[20px] bg-brown-300/30 p-[18px] shadow-sideBar">
      <img src={acoFace} alt="아코 얼굴" />
      <div className="flex flex-col gap-3 mt-[67px]">
        <SidebarButton
          name="홈"
          icon={activeButton === 0 ? homeActive : home}
          isActive={activeButton === 0}
          onClick={() => handleButtonClick(0, '/')}
        />
        <SidebarButton
          name="차트"
          icon={activeButton === 1 ? chartActive : chart}
          isActive={activeButton === 1}
          onClick={() => handleButtonClick(1, '/chart')}
        />
        <SidebarButton
          name="테이블"
          icon={activeButton === 2 ? tableActive : table}
          isActive={activeButton === 2}
          onClick={() => handleButtonClick(2, '/table')}
        />
        <SidebarButton
          name="채팅"
          icon={activeButton === 3 ? chatActive : chat}
          isActive={activeButton === 3}
          onClick={() => handleButtonClick(3, '/chatting')}
        />
      </div>
      <button />
    </div>
  );
};

export default Sidebar;
