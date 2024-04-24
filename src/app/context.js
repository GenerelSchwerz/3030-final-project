import React, { createContext, useContext, useEffect, useState } from 'react';
import { getInfo } from './utils';

const AuthContext = createContext(); // Creates a Context object.

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Placeholder for login/logout logic
  // const login = (token) => {
  //   localStorage.setItem('token', token);
  //   setLoggedIn(true);
  // }
  // const logout = () => {
  //   localStorage.removeItem('token');
  //   setLoggedIn(false);
  // }

  const setSetLoggedIn = (value, token) => {
    if (value === true) {
      if (token === undefined) throw new Error('Token is required');
      localStorage.setItem('token', token)
    }

    else if (value === false) localStorage.removeItem('token');
    setLoggedIn(value);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // due to having token loaded, we can assume user is logged in (cookie should also be loaded.)
      setLoggedIn(true);
    }

    const controller = new AbortController();
    getInfo(controller)
      .then((response) => {
        setLoggedIn(true);
        localStorage.setItem('token', response.token);
      })
      .catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem('token');
      });

    return () => controller.abort();


  }, [setLoggedIn]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn: setSetLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Custom hook to use the auth context
