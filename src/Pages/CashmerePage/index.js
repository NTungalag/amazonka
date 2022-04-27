import React from "react";
import css from "./style.module.css";
import { Products, PosterTop, PosterAverage } from "../../components";
const CashmerePage = () => {
  const src =
    "https://cdn5.shoppy.mn/img/58118/3584x0xwebp/b2.png?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7";
  return (
    <div className={css.Cashmere}>
      <div className={css.background}>
        <PosterTop src="https://cdn5.shoppy.mn/img/56186/3584x0xwebp/cover.jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
        <PosterTop src="https://cdn5.shoppy.mn/img/58118/3584x0xwebp/b2.png?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
        <PosterAverage src="https://cdn5.shoppy.mn/img/56269/2688x0xwebp/womencover.jpg?h=cbd5c6f4bd3619cea88a29436ebca3b0a72a1df3" />
        <h3>ALL PRODUCTS</h3>
      </div>

      <Products />
    </div>
  );
};

export default CashmerePage;
