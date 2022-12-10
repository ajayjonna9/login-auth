import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const localStorageToken = localStorage.getItem("token");
  const [token, setToken] = useState(localStorageToken);
  const Login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const Logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const contexValues = {
    token: token,
    isLoggin: !!token,
    login: Login,
    logout: Logout,
  };

  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
