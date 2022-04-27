import React from "react";
import Icon from "../icon";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const Icons = () => {
  return (
    <div className={css.Icons}>
      <Icon />
      <Link to="/Login">
        <PersonOutlineIcon fontSize="small" color="black" />
      </Link>
      <Link to="/Signup">
        <PersonAddAltIcon fontSize="small" color="black" />
      </Link>
    </div>
  );
};
export default Icons;
