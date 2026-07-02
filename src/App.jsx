import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

import ProductForm from "./Components/ProductForm";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/add-product"
          element={<ProductForm />}
        />
      </Routes>
    </>
  );
}

export default App;