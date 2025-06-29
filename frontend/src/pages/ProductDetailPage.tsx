import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div>Product not found.</div>
  }

  return (
    <div className="product-detail">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}