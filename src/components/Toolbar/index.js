import React from "react";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";
import css from "./style.module.css";
import Logo from "../Logo";
import Icons from "../Icons";

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <HamburgerMenu />
      <Logo />
      <nav className={css.OnMobile}>
        <Menu />
        <Icons />
      </nav>
    </header>
  );
};
export default Toolbar;
