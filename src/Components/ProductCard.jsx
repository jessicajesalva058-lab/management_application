import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function ProductCard({ product }) {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useProducts();

  const subtotal = product.price * product.quantity;

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">

        <div className="product-category">
          {product.category}
        </div>

        <h2>{product.name}</h2>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <h3>
          ₱{product.price.toLocaleString()}
        </h3>

        <p>
          <strong>Quantity:</strong> {product.quantity}
        </p>

        <p>
          <strong>Subtotal:</strong> ₱{subtotal.toLocaleString()}
        </p>

        {product.quantity < 5 ? (
          <div className="stock low-stock">
            Low Stock
          </div>
        ) : (
          <div className="stock in-stock">
            In Stock
          </div>
        )}

        <div className="quantity-buttons">

          <button
            onClick={() => decreaseQuantity(product.id)}
          >
            −
          </button>

          <span>{product.quantity}</span>

          <button
            onClick={() => increaseQuantity(product.id)}
          >
            +
          </button>

        </div>

        <div className="card-buttons">

          <Link to={`/product/${product.id}`}>
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;