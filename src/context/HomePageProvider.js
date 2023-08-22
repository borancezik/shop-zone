import React, { createContext, useContext, useState } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const value = {
    sort,
    setSort,
    category,
    setCategory,
  };

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

export const useHomePageContext = () => useContext(HomePageContext);
