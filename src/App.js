import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/about/Sidebar.jsx';
import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { AuthProvider } from './context/AuthContext.js';

import './App.css';
import { RecoilRoot } from 'recoil';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const location = useLocation();
  const showSidebar =
    location.pathname === '/chart' ||
    location.pathname === '/chatting' ||
    location.pathname === '/table';

  return (
    <Wrapper>
      <div className="flex flex-row">
        {showSidebar && <Sidebar />}
        <Outlet />
      </div>
    </Wrapper>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
