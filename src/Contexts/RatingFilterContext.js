import React, { createContext, useContext, useState, useMemo } from "react";

const RatingFilterContext = createContext();

export const RatingFilterProvider = ({ children }) => {
  const [minRating, setMinRating] = useState(0);

  const updateMinRating = (rating) => {
    setMinRating(rating);
  };

  const clearMinRating = () => {
    setMinRating(0);
  };

  const contextValue = useMemo(
    () => ({
      minRating,
      updateMinRating,
      clearMinRating,
    }),
    [minRating]
  );

  return (
    <RatingFilterContext.Provider value={contextValue}>
      {children}
    </RatingFilterContext.Provider>
  );
};

export const useRatingFilter = () => {
  const context = useContext(RatingFilterContext);
  if (!context) {
    throw new Error("useRatingFilter must be used within a RatingFilterProvider");
  }
  return context;
};
