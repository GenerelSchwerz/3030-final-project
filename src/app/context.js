import React, { createContext, useContext, useEffect, useState } from 'react';
import { getInfo } from './utils';

const AuthContext = createContext(); // Creates a Context object.

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(2);

  // Placeholder for login/logout logic
  const login = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
  }
  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(2);
    }

    const controller = new AbortController();
    getInfo(controller)
      .then((response) => {
        setLoggedIn(1);
      })
      .catch((err) => {
        setLoggedIn(2);
      });

    return () => controller.abort();


  }, [setLoggedIn]);

  console.log('RENDERING')
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Custom hook to use the auth context
