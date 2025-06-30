import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.productId}>
                <img src={item.image} style={{ width: 50 }} />
                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.productId)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  )
}