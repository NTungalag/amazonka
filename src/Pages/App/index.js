import React, { useState } from "react";
import Sidebar from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import css from "./style.module.css";
import LoginPage from "../LoginPage";
import MenPage from "../MenPage";
import WomenPage from "../WomenPage";
import KidsPage from "../KidsPage";
import CashmerePage from "../CashmerePage";
import SportsPage from "../SportsPage";
import AccessoriesPage from "../AccessoriesPage";
import { Route, Routes } from "react-router-dom";
import Search from "../../components/Search";
import ProductInfo from "../ProductInfo/ProductInfo";
import SignUpPage from "../SignUpPage/SignUpPage";
import { Posters } from "../../components/index";

function App() {
  // axiMenProducts();

  const [showSearch, setshowSearch] = useState(false);

  return (
    <>
      <Toolbar />
      {/* <Sidebar /> 
         <MenuItem text="Men" /> <MenuItem text="Women" />
        <MenuItem text="Kids" />
        <MenuItem text="Cashmere" />
        <MenuItem text="Sports" />
        <MenuItem text="Accessories" />*/}
      {/* <Search /> */}

      <main className={css.Main}>
        <Routes>
          <Route path="/Men" element={<MenPage />} />
          <Route path="/Women" element={<WomenPage />} />
          <Route path="/Kids" element={<KidsPage />} />
          <Route path="/Cashmere" element={<CashmerePage />} />
          <Route path="/Sports" element={<SportsPage />} />
          <Route path="/Accessories" element={<AccessoriesPage />} />
          <Route path="/products" element={<ProductInfo />} />

          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/" element={<Posters />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// axios
//   .post(
//     "https://ka-14858-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
//     mass
//   )
//   .then((el) => console.log("POST === element,      ", el))
//   .catch((err) => console.log("^^ error,        ", err));

// axios
//   .get(
//     "https://ka-14858-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
//   )
//   .then((el) => console.log("GET ===   element=====>", el.data))
//   .catch((err) => console.log("   error ===> ", err));
