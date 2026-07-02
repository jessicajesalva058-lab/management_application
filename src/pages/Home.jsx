import CategoryFilter from "../Components/CategoryFilter";
import ProductList from "../Components/ProductList";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            Product Management System
          </span>

          <h1>
            Manage Your Products
            <br />
            Like a Professional
          </h1>

          <p>
            Easily organize your inventory, monitor stock,
            compute totals, and manage your shopping cart
            through a modern and responsive dashboard.
          </p>

        </div>

      </section>

      <CategoryFilter />

      <ProductList />

    </div>
  );
}

export default Home;