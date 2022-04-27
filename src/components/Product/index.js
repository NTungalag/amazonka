import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";

const Product = (props) => {
  useEffect(() => {
    // return () => {
    //   props.history;
    // };
  }, []);
  return (
    <div className={css.Product}>
      <Link to={`/products/${props.product.title.substring(0, 5)}`}>
        <img src={props.product.src[0]} />
      </Link>
      <h4> {props.product.title} </h4>
      <p className={css.Description}> {props.product.desciption} </p>
      <p> {props.product.price} ₮</p>
    </div>
  );
};

export default Product;
