import React, { useState } from "react";
import css from "./style.module.css";

const Search = () => {
  const [search, setSearch] = useState();

  return (
    <div className={css.Search}>
      <input
        placeholder="Эндээс бүхнийг хайж болно"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <p> {search} </p>
    </div>
  );
};

export default Search;
