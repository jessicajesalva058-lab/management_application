import Cart from "../Components/Cart";

function CartPage() {
  return (
    
    <div className="cart-page">
      <div className="page-title">
        <h1>🛒 Shopping Cart</h1>
        <p>Review the products you've added to your cart.</p>
      </div>

      <Cart />
    </div>
  );
}

export default CartPage;