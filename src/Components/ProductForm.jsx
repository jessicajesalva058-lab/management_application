import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function ProductForm() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    specifications: "",
    rating: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.image ||
      !form.name ||
      !form.category ||
      !form.description ||
      !form.specifications ||
      !form.rating ||
      !form.price ||
      !form.quantity
    ) {
      alert("Please complete all fields.");
      return;
    }

    addProduct({
      ...form,
      rating: Number(form.rating),
      price: Number(form.price),
      quantity: Number(form.quantity),
      specifications: form.specifications
        .split(",")
        .map((item) => item.trim()),
    });

    alert("Product added successfully!");

    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-card">

        <h1>Add New Product</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={form.description}
            onChange={handleChange}
          />

          <textarea
            name="specifications"
            placeholder="Specifications (Separate with commas)"
            rows="4"
            value={form.specifications}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (1-5)"
            value={form.rating}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleChange}
          />

          <button type="submit">
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
}

export default ProductForm;