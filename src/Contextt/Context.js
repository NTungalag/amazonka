import React, { useState } from "react";

const Context = React.createContext();

export const Store = (props) => {
  const [products, setProducts] = useState();

  return <Context.Provider value={products}>{props.children}</Context.Provider>;
};

export default Context;
