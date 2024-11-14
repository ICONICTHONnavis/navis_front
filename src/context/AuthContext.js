import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => {
    const savedLoginState = localStorage.getItem('isLogin');
    return savedLoginState === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLogin', isLogin);
  }, [isLogin]);

  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
