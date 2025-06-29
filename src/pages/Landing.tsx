import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Bienvenido a Paradise Nursery</h1>
      <p>Tu tienda favorita de plantas de interior</p>
      <Link to="/products">
        <button>Ver plantas</button>
      </Link>
    </div>
  );
}
