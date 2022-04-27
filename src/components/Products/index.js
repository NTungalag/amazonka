import React, { useEffect, useState } from "react";
import Product from "../Product";
import css from "./style.module.css";
const Products = (props) => {
  return (
    <div className={css.Products}>
      {props.children}
      {/* SUULIIN 2 PRODUCTIIN SPACING ZASNA!!!!!css */}
    </div>
  );
};

export default Products;
