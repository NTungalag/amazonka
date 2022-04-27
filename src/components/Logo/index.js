import React from "react";
import logoImage from "../../Assets/michelamazonka.png";

import css from "./style.module.css";

const Logo = () => {
  return (
    <a className={css.Logo} href="/">
      <img src={logoImage} />
    </a>
  );
};
export default Logo;
