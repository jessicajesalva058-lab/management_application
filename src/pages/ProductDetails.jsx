import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function ProductDetails() {
  const { id } = useParams();

  const {
    products,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useProducts();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>

        <Link to="/">
          <button className="back-btn">
            Back Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="details-info">

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-rating">
            ⭐ {product.rating}
          </div>

          <h2>
            ₱{product.price.toLocaleString()}
          </h2>

          <p className="description">
            {product.description}
          </p>

          <h3>Specifications</h3>

          <ul>

            {product.specifications.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <h3>
            Available Quantity:
            {" "}
            {product.quantity}
          </h3>

          {product.quantity < 5 ? (
            <p className="low-stock">
              ⚠ Low Stock
            </p>
          ) : (
            <p className="in-stock">
              ✔ In Stock
            </p>
          )}

          <div className="quantity-buttons">

            <button
              onClick={() =>
                decreaseQuantity(product.id)
              }
            >
              −
            </button>

            <span>{product.quantity}</span>

            <button
              onClick={() =>
                increaseQuantity(product.id)
              }
            >
              +
            </button>

          </div>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;