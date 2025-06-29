import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <div>
          <Link to="/">Inicio</Link> | <Link to="/products">Productos</Link>
        </div>
        <div>
          <Link to="/cart">🛒 {total}</Link>
        </div>
      </nav>
    </header>
  );
}
