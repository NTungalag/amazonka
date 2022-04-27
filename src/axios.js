import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import jsn from "./Data/productMen.json";
const Aaa = () => {
  axios
    .get(
      "https://ka-14858-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
    )
    .then((el) => console.log(el))
    .catch((err) => console.log(err));

  return (
    <Button variant="outlined" color="secondary">
      Button...
    </Button>
  );
};
export const axiMenProducts = () => {
  const data = jsn;

  data.map((element) =>
    axios
      .post(
        "https://ka-14858-default-rtdb.asia-southeast1.firebasedatabase.app/producsMen.json",
        element
      )
      .then((el) => console.log(el))
      .catch((err) => console.log(err))
  );
};
export default Aaa;
