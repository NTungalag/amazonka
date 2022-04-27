import React from "react";
import css from "./style.module.css";

const PosterTop = (props) => {
  return (
    <div className={css.PosterTop}>
      <img
        src={
          props.src
            ? props.src
            : "https://cdn5.shoppy.mn/img/55697/3584x0xwebp/men-cover.jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7"
        }
      />
    </div>
  );
};

export default PosterTop;
