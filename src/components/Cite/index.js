import React from "react";
import css from "./style.module.css";
const Cite = (props) => {
  const cite = {
    quote: "Looking good isn't self importance; it's self-respect.",
    person: "Charles Hix",
  };
  return (
    <div className={css.Cite}>
      <p className={css.quote}>{props.quote ? props.quote : cite.quote}</p>
      <p className={css.person}>{props.quote ? "" : cite.person} </p>
    </div>
  );
};

export default Cite;
