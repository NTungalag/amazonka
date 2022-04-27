import React from "react";
import css from "./style.module.css";

import {
  Products,
  NewDesign,
  PosterTop,
  PosterAverage,
  Cite,
} from "../../components";
const SportsPage = () => {
  return (
    <div className={css.Sports}>
      <PosterTop src="https://cdn5.shoppy.mn/img/87404/3584x0xwebp/dd.jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
      <Cite />

      <h3> PRODUCTS</h3>
      <Products />
    </div>
  );
};

export default SportsPage;
