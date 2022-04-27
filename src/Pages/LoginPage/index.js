import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import css from "./style.module.css";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [err, seterr] = useState(false);
  const [idToken, setidToken] = useState();
  const [refreshToken, setrefreshToken] = useState();

  const setemail = (em) => {
    setEmail(em.target.value);
  };
  const setpass = (pas) => {
    setPass(pas.target.value);
  };

  const login = () => {
    if (email != true || !pass != true) {
      seterr("Хоосон талбар байна !");
    } else {
      const userData = {
        email,
        password: pass,
        returnSecureToken: true,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSO7GUWCEpVk17HCUsIAqNeYpLAWqXg7Q",
          userData
        )
        .then((res) => {
          console.log(res.data);
          setrefreshToken(res.data.refreshToken);
          setidToken(res.data.idToken);
          console.log(idToken, refreshToken);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={css.LoginPage}>
      <div className={css.Login}>
        {idToken && <Navigate replace to="/" />}
        <input
          onChange={setemail}
          type="text"
          placeholder="е-мэйл хаягаа оруулна уу"
        />
        <input
          onChange={setpass}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        {err}
        {pass}
        <button onClick={() => login()}>Нэвтрэх</button>
      </div>
    </div>
  );
};
export default LoginPage;
