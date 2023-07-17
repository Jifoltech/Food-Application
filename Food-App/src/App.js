import { useState } from "react";
import Header from "./components/Layout/header";
import Meals from "./components/Meal/meal";
import Cart from "./components/Cart/cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartIsVisible, updateCartIsVisible] = useState(false);

  const showCartHandler = () => {
    updateCartIsVisible(true);
  };

  const hideCartHandler = () => {
    updateCartIsVisible(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
