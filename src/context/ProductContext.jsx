import { createContext, useContext, useMemo, useState } from "react";
import productsData from "../data";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (category === "All") return products;

    return products.filter(
      (product) => product.category === category
    );
  }, [products, category]);

  const increaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };


  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now(),
    };

    setProducts((prev) => [...prev, product]);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, cartQuantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseCartQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      )
    );
  };

  const decreaseCartQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  };


  const overallTotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,

        category,
        setCategory,

        cart,
        cartTotal,
        cartCount,

        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,

        addProduct,

        increaseQuantity,
        decreaseQuantity,

        overallTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);