import css from "./style.module.css";
import React from "react";
import Poster from "../Poster";
const Posters = () => {
  const zurag = [
    "https://cdn5.shoppy.mn/img/57588/1792x0xwebp/menmobile.jpg?h=3ffd12322c6f31911deb59ca10e85457a9a5c56f",
    "https://cdn5.shoppy.mn/img/87370/1792x0xwebp/woman-cover_mobile_(1).jpg?h=3ffd12322c6f31911deb59ca10e85457a9a5c56f",
    "https://cdn5.shoppy.mn/img/101744/1680x0xwebp/Untitled_Artwork_(2).jpg?h=2a132492773448c86e3728217a034196aa54be0a",
    "https://cdn5.shoppy.mn/img/57584/1680x0xwebp/covermobile.jpg?h=2a132492773448c86e3728217a034196aa54be0a",
    "https://cdn5.shoppy.mn/img/87362/1680x0xwebp/1jno.jpg?h=2a132492773448c86e3728217a034196aa54be0a",
    "https://cdn5.shoppy.mn/img/87366/1680x0xwebp/acces-mobility2.jpg?h=2a132492773448c86e3728217a034196aa54be0a",
  ];
  const zur = [];
  zurag.forEach((element) => {
    zur.push(<Poster src={element} />);
  });

  // const zur = [];
  // zurag.forEach((element) => {
  //   zur.push(
  //     <a href="">
  //       <img src={element} />
  //     </a>
  //   );
  // });

  return <div className={css.Posters}>{zur}</div>;
};

export default Posters;
