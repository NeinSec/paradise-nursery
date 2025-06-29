import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
