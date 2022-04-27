import React from "react";
import css from "./style.module.css";

const PosterAverage = (props) => {
  return (
    <div className={css.PosterAverage}>
      <a href="/">
        <img
          src={
            props.src
              ? props.src
              : "https://cdn5.shoppy.mn/img/55698/2688x0xwebp/cashmere.jpg?h=cbd5c6f4bd3619cea88a29436ebca3b0a72a1df3"
          }
        />
      </a>
    </div>
  );
};

export default PosterAverage;
