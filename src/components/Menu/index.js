import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => {
  return (
    <ul className={css.Menu}>
      <MenuItem text="Men" />
      <MenuItem text="Women" />
      <MenuItem text="Kids" />
      <MenuItem text="Cashmere" />
      <MenuItem text="Sports" />
      <MenuItem text="Accessories" />
    </ul>
  );
};
export default Menu;
