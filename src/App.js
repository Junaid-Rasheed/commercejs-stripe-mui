import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/product/Products";
import { commerce } from "../src/lib/commerce";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const handleCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  };

  const handleEmptyCart = async (productId) => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  return (
    <Router>
      <Navbar totalItems={cart.total_items || 0} />

      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} handleAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              order={order}
              handleCaptureCheckout={handleCaptureCheckout}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleCartQty={handleCartQty}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
