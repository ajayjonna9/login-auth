import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Contex from "../Store/Contex";
import { useContext } from "react";

const MainNavigation = () => {
  const hystory = useHistory();
  const contexVal = useContext(Contex);
  const onLogout = () => {
    contexVal.logout();
    hystory.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!contexVal.isLoggin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {contexVal.isLoggin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {contexVal.isLoggin && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
