import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {addToCart} = useCart()

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="store-container">
      <h1>Store</h1>
      <div className="store-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${Number(product.price).toFixed(2)}</p>
            <button
              onClick={() =>
                addToCart({
                  productId: product.id,
                  name: product.name,
                  price: Number(product.price),
                  image: product.image,
                })
              }
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
