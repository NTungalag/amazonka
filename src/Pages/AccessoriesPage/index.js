import React from "react";
import css from "./style.module.css";

import {
  Products,
  NewDesign,
  PosterTop,
  PosterAverage,
  Cite,
} from "../../components";
const AccessoriesPage = () => {
  return (
    <div className={css.Accessories}>
      <PosterTop src="https://cdn5.shoppy.mn/img/70581/3584x0xwebp/acces-mobility2.jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
      <Cite />
      <h3> PRODUCTS</h3>
      <Products />
    </div>
  );
};

export default AccessoriesPage;
