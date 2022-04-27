import React from "react";
import css from "./style.module.css";
import Menu from "../Menu";
import Categories from "../Categories";

const Sidebar = (props) => {
  return (
    <div className={css.SideBar}>
      <Menu />
      <Categories />
    </div>
  );
};
export default Sidebar;
