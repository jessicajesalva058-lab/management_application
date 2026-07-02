import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

function ProductList() {
  const { filteredProducts, overallTotal } = useProducts();

  return (
    <div className="products-section">

      <div className="products-header">
        <div>
          <h1>Featured Products</h1>
          <p>Manage your inventory efficiently.</p>
        </div>

        <div className="overall-card">
          <span>Overall Inventory Value</span>
          <h2>₱{overallTotal.toLocaleString()}</h2>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-products">
          <h2>No products found.</h2>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default ProductList;