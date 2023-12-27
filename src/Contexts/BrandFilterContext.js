import React, { createContext, useContext, useState, useMemo } from "react";

const BrandFilterContext = createContext();

export const BrandFilterProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleBrandSelection = (brand) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter((selectedBrand) => selectedBrand !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
  };

  const contextValue = useMemo(
    () => ({
      selectedBrands,
      toggleBrandSelection,
      clearSelectedBrands,
    }),
    [selectedBrands]
  );

  return (
    <BrandFilterContext.Provider value={contextValue}>
      {children}
    </BrandFilterContext.Provider>
  );
};

export const useBrandFilter = () => {
  const context = useContext(BrandFilterContext);
  if (!context) {
    throw new Error("useBrandFilter must be used within a BrandFilterProvider");
  }
  return context;
};
