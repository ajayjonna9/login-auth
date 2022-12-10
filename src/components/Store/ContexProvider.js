import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [token, setToken] = useState(null);
  const Login = (token) => {
    setToken(token);
  };
  const Logout = () => {
    setToken(null);
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
