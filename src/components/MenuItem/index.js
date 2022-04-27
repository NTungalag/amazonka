import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div className={css.MenuItem}>
      <Link className={css.link} to={props.text}>
        {" "}
        {props.text}
      </Link>
    </div>
  );
};
export default MenuItem;
