import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import Product from "../../components/Product";
import {
  Products,
  NewDesign,
  PosterTop,
  PosterAverage,
  Cite,
} from "../../components";
import axios from "axios";

const MenPage = () => {
  const [menProducts, setMenProducts] = useState();

  useEffect(() => {
    axios
      .get(
        "https://ka-14858-default-rtdb.asia-southeast1.firebasedatabase.app/producsMen.json"
      )
      .then((pro) => {
        let arr = [];
        Object.entries(pro.data).map((element, index) => {
          arr.push(
            <Product
              key={index + element[1].title.substring(0, 3)}
              product={element[1]}
            />
          );
        });
        setMenProducts(arr);
      })
      .catch((er) => console.log(er));
    return () => {
      setMenProducts();
    };
  }, []);

  return (
    <div className={css.MenPage}>
      <PosterTop />
      <Cite />
      <PosterAverage />
      <NewDesign />
      <h3> PRODUCTS</h3>
      <Products>{menProducts}</Products>
    </div>
  );
};

export default MenPage;
