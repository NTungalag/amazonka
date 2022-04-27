import React from "react";
import css from "./style.module.css";
const NewDesign = () => {
  const imsSrc =
    "https://cdn5.shoppy.mn/img/55701/2688x0xwebp/beanie_hat_special.png?h=cbd5c6f4bd3619cea88a29436ebca3b0a72a1df3";

  return (
    <div className={css.NewDesign}>
      <h3> NEW DESIGNS</h3>
      <p>Ninja hat</p>
      <img src={imsSrc} />
      <a href=""> SHOP NOW</a>
    </div>
  );
};

export default NewDesign;
