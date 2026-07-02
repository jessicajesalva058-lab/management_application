import { useProducts } from "../context/ProductContext";

function CategoryFilter() {
  const { products, category, setCategory } = useProducts();

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="filter-container">

      <h2>Filter by Category</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}

export default CategoryFilter;