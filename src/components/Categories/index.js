import React from "react";
import css from "./style.module.css";
import Category from "../Category";

const Categories = (props) => {
  return (
    <div className={css.Categories}>
      <ul>
        <Category />
        <Category />
        <Category />
        <Category />
      </ul>
    </div>
  );
};
export default Categories;
