"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { getInfo } from "./utils";

/**
 * @type {React.Context<{ user: any; loggedIn: boolean; setLoggedIn: (value: boolean, token?: string) => any | null; updateUser: (controller: AbortController) => void; }>}
 */
const AuthContext = createContext(); // Creates a Context object.

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const setSetLoggedIn = (value, token) => {
    if (value === true) {
      if (token === undefined) throw new Error("Token is required");
      localStorage.setItem("token", token);
    } else if (value === false) localStorage.removeItem("token");
    else throw new Error("Invalid value for setLoggedIn");

    setLoggedIn(value);
  };




  const updateUser = async (controller) => {
    try {
      const response = await getInfo(controller);
      setLoggedIn(true);
      localStorage.setItem("token", response.token);
      setUser(response);

      return response
    
    } catch (err) {
      setLoggedIn(false);
      localStorage.removeItem("token");
      setUser(null);
      return null;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // due to having token loaded, we can assume user is logged in (cookie should also be loaded.)
      setLoggedIn(true);
    }

    const controller = new AbortController();
    getInfo(controller)
    
      .then((response) => {
        setLoggedIn(true);
        localStorage.setItem("token", response.token);
        setUser(response)
      })
      .catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        setUser(null)
      })

    return () => controller.abort();
  }, [setLoggedIn]);

  return <AuthContext.Provider value={{ user, loggedIn, setLoggedIn: setSetLoggedIn, updateUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext); // Custom hook to use the auth context
