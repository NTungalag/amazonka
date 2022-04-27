import React, { useContext } from "react";
import css from "./style.module.css";
import img from "../../Assets/search.png";
import SearchIcon from "@mui/icons-material/Search";
const Icon = (props) => {
  return (
    <div className={css.Icon}>
      <a href="">
        <SearchIcon fontSize="small" color="black" />
      </a>
    </div>
  );
};
export default Icon;
