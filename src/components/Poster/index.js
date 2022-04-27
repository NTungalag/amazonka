import React from "react";
import css from "./style.module.css";

const Poster = (props) => {
  return (
    <div className={css.Poster}>
      <a href="">
        <img src={props.src} />
      </a>
    </div>
  );
};

export default Poster;
