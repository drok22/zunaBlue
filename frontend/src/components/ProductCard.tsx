import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type Props = {
  product: Product;
  onAddToCart?: () => void;
};

const ProductCard = ({ product, onAddToCart }: Props) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
      />
    </Link>
    <div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
      {onAddToCart && (
        <button onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  </div>
);

export default ProductCard;
