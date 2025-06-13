'use client'

import React, { useState, useEffect } from "react";
import { Context } from "./Context";



const MyContextProvider = ({ children }) => {

  const [authState, setAuthState] = useState("Login");
  const [userName, setUserName] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
 

  // Shared data for the context provider
  const data = {
    showAuth, 
    setShowAuth,
    authState,
    userName,
    setUserName,
    setAuthState,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default MyContextProvider;
