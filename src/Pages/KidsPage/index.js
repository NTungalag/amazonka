import React from "react";
import css from "./style.module.css";
import {
  Products,
  NewDesign,
  PosterTop,
  PosterAverage,
  Cite,
} from "../../components";
const KidsPage = () => {
  return (
    <div className={css.Kids}>
      <PosterTop src="https://cdn5.shoppy.mn/img/112916/3584x0xwebp/IMG_5129.JPG?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7://cdn5.shoppy.mn/img/101743/3584x0xwebp/Untitled_Artwork_1_(1).jpg?h=63b514cfc7d482f2529f7ca0a7d8d035db4ec9d7" />
      <Cite quote="You were made to be awesome." />
      <PosterTop src="https://d1f6qhhrbg3j8a.cloudfront.net/img/55898/original/miskazonkbanner.gif" />

      <Products />
    </div>
  );
};

export default KidsPage;
