import React, { useContext, useState } from "react";
import css from "./style.module.css";

const ProductInfo = (props) => {
  // const [product, setProduct] = useState();
  // const context = useContext();
  return (
    <div className={css.ProductInfo}>
      <div className={css.Detail}>
        <div className={css.Images}>
          <img src="https://cdn3.shoppy.mn/spree/images/1092243/large/7.jpg" />
        </div>
        <div className={css.Uzuulelt}>
          <h6> Үзүүлэлтүүд</h6>
          <div className={css.Info}>
            <ul className={css.infoList1}>
              <li>Насны ангилал:</li>
              <li>Ерөнхий өнгө:</li>
              <li>Хүйс:</li>
              <li>Улирал: </li>
              <li>Материал:</li>
            </ul>
            <ul className={css.infoList2}>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
              <li>d</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.Detail2}>
        <h4> props.product.title </h4>
        <p className={css.Description}> props.product.desciption </p>
        <p>
          Үнэ <br /> props.product.price ₮
        </p>
      </div>
    </div>
  );
};
export default ProductInfo;
