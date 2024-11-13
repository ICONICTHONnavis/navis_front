import React from 'react';

const SidebarButton = ({ name, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[60px] h-[60px] flex justify-center items-center rounded-[12px] 
                  ${isActive ? 'bg-brown-200' : 'bg-transparent'}`}
    >
      <img src={icon} alt={name} />
    </button>
  );
};

export default SidebarButton;
