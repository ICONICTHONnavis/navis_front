import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const buttons = [
    { name: '홈', path: '/', icon: home, activeIcon: homeActive },
    { name: '차트', path: '/chart', icon: chart, activeIcon: chartActive },
    { name: '테이블', path: '/table', icon: table, activeIcon: tableActive },
    { name: '채팅', path: '/chatting', icon: chat, activeIcon: chatActive },
  ];

  const activeButtonIndex = buttons.findIndex(button => button.path === location.pathname);

  const handleButtonClick = path => {
    navigate(path);
  };

  return (
    <div className="flex flex-col w-[100px] h-[913px] rounded-[20px] bg-brown-300/30 p-[18px] shadow-sideBar">
      <img src={acoFace} alt="아코 얼굴" />
      <div className="flex flex-col gap-3 mt-[67px]">
        {buttons.map((button, index) => (
          <SidebarButton
            key={index}
            name={button.name}
            icon={activeButtonIndex === index ? button.activeIcon : button.icon}
            isActive={activeButtonIndex === index}
            onClick={() => handleButtonClick(button.path)}
          />
        ))}
      </div>
      <button />
    </div>
  );
};

export default Sidebar;
