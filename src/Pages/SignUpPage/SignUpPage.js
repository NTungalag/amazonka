import axios from "axios";
import React, { useEffect, useState, useHistory } from "react";
import css from "./style.module.css";
import { Navigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState();
  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();
  const [err, seterr] = useState(false);
  const [idToken, setidToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const setemail = (em) => {
    setEmail(em.target.value);
  };
  const setpass1 = (pas) => {
    setPass1(pas.target.value);
  };
  const setpass2 = (pas) => {
    setPass2(pas.target.value);
  };

  const signup = () => {
    if (pass1 === pass2) {
      const userData = {
        email,
        password: pass1,
        returnSecureToken: true,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSO7GUWCEpVk17HCUsIAqNeYpLAWqXg7Q",
          userData
        )
        .then((result) => {
          console.log(result.data);
          setrefreshToken(result.data.refreshToken);
          setidToken(result.data.idToken);
          console.log(idToken, refreshToken);
        })
        .catch((err) => console.log(err));
    } else seterr(true);
  };

  return (
    <div className={css.SignUpPage}>
      <div className={css.Signup}>
        {idToken && <Navigate replace to="/" />}
        <input
          onChange={setemail}
          type="text"
          placeholder="E-мэйл хаягаа оруулна уу"
        />
        {email}
        <input
          onChange={setpass1}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        <input
          onChange={setpass2}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        {err ? "Нууц үг буруу оруулсан байна !" : pass1}
        <button onClick={() => signup()}>Бүртгүүлэх</button>
      </div>
    </div>
  );
}
