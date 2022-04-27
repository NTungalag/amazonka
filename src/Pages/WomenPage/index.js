import React from "react";
import css from "./style.module.css";
import { Products, PosterTop, Cite } from "../../components";
const WomenPage = () => {
  return (
    <div className={css.Women}>
      <PosterTop src="https://cdn5.shoppy.mn/img/55685/3584x0xwebp/woman-cover.jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
      <Cite />

      <Products />
    </div>
  );
};

export default WomenPage;
