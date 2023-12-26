import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { PriceFilterProvider } from "./Contexts/PriceFilterContext";

function App() {
  return (
    <div className="App">
      <PriceFilterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </PriceFilterProvider>
    </div>
  );
}

export default App;
