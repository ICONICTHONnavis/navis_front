import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/about/Sidebar';

const RootLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname === '/chart' || location.pathname === '/chatting';

  return (
    <div style={{ display: 'flex' }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
