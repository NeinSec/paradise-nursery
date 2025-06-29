import { useContext } from "react";
import { plants } from "../data/plants";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Catálogo de Plantas</h2>
      {plants.map((plant) => (
        <div className="product-card" key={plant.id}>
          <img src={plant.image} alt={plant.name} width={120} />
          <div>
            <h4>{plant.name}</h4>
            <p>${plant.price.toFixed(2)}</p>
            <button onClick={() => addToCart(plant)}>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}
