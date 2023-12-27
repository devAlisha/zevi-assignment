import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { PriceFilterProvider } from "./Contexts/PriceFilterContext";
import { useEffect } from "react";
import { BrandFilterProvider } from "./Contexts/BrandFilterContext";
import { RatingFilterProvider } from "./Contexts/RatingFilterContext";

function App() {
  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "light");
  }, []);
  return (
    <div className="App">
      <RatingFilterProvider>
        <BrandFilterProvider>
          <PriceFilterProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </PriceFilterProvider>
        </BrandFilterProvider>
      </RatingFilterProvider>
    </div>
  );
}

export default App;
