import React from "react";

const Contex = React.createContext({
  token: "",
  isLoggin: false,
  login: (token) => {},
  logout: () => {},
});

export default Contex;
