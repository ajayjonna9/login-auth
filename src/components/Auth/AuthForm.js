import axios from "axios";
import { useContext, useRef, useState } from "react";

import classes from "./AuthForm.module.css";
import Contex from "../Store/Contex";

const AuthForm = () => {
  const email = useRef();
  const password = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoad, setIsLoad] = useState(true);
  const [login, setLogin] = useState(false);
  const contecVal = useContext(Contex);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const onSubmitingform = (e) => {
    e.preventDefault();
    setIsLoad(false);
    let url;
    if (!isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8";
    }
    async function auth() {
      try {
        const obj = {
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        };
        const head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.post(url, JSON.stringify(obj), head);
        setIsLoad(true);
        contecVal.login(res.data.idToken);
        console.log(res.data.idToken);
      } catch (err) {
        alert("Authentication failed");
        setIsLoad(true);
      }
    }
    auth();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmitingform}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={email} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={password} required />
        </div>
        <div className={classes.actions}>
          {isLoad ? (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          ) : (
            <p>Sending Request...</p>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
