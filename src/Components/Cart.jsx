import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    cartTotal,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useProducts();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some products to your cart.</p>

        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">

      {cart.map((item) => (
        <div className="cart-card" key={item.id}>

          <img src={item.image} alt={item.name} />

          <div className="cart-details">

            <span className="cart-category">
              {item.category}
            </span>

            <h2>{item.name}</h2>

            <p>
              <strong>Price:</strong> ₱{item.price.toLocaleString()}
            </p>

            {/* ✅ QUANTITY CONTROLS */}
            <div className="qty-controls">

              <button
                onClick={() => decreaseCartQuantity(item.id)}
              >
                −
              </button>

              <span>{item.cartQuantity}</span>

              <button
                onClick={() => increaseCartQuantity(item.id)}
              >
                +
              </button>

            </div>

            <p>
              <strong>Subtotal:</strong> ₱
              {(item.price * item.cartQuantity).toLocaleString()}
            </p>

          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ₱{cartTotal.toLocaleString()}</h2>

        <button className="checkout-btn">
          Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;