// PriceFilterContext.js
import React, { createContext, useContext, useState } from "react";

const PriceFilterContext = createContext();

export const PriceFilterProvider = ({ children }) => {
  const [priceFilter, setPriceFilter] = useState({
    lessThan500: false,
    moreThan500: false,
  });

  const updatePriceFilter = (filterType) => {
    setPriceFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: !prevFilter[filterType],
    }));
  };

  const clearPriceFilter = () => {
    setPriceFilter({
      lessThan500: false,
      moreThan500: false,
    });
  };

  return (
    <PriceFilterContext.Provider
      value={{ priceFilter, updatePriceFilter, clearPriceFilter }}
    >
      {children}
    </PriceFilterContext.Provider>
  );
};

export const usePriceFilter = () => {
  const context = useContext(PriceFilterContext);
  if (!context) {
    throw new Error("usePriceFilter must be used within a PriceFilterProvider");
  }
  return context;
};
