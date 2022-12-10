import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import Contex from "../Store/Contex";
import axios from "axios";

const ProfileForm = () => {
  const changePassword = useRef();
  const contextval = useContext(Contex);
  const onChangePassword = (e) => {
    e.preventDefault();

    async function changepassword() {
      try {
        const head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const obj = {
          idToken: contextval.token,
          password: changePassword.current.value,
          returnSecureToken: true,
        };
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8",
          JSON.stringify(obj),
          head
        );
        console.log(res);
      } catch (err) {}
    }
    changepassword();
  };
  return (
    <form className={classes.form} onSubmit={onChangePassword}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={changePassword} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
