import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ShoppingCart() {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} width={80} />
              </div>
              <div style={{ flex: 1, marginLeft: "10px" }}>
                <h4>{item.name}</h4>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <div>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}
