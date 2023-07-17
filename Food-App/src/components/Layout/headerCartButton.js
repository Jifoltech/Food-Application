import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/cartIcon";
import CartContext from "../../store/cart-context";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnHighlighted, updataBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    updataBtnHighlighted(true);

    const timer = setTimeout(() => {
      updataBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
