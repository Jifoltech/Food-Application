import { Fragment } from "react";
import HeaderCartButton from "./headerCartButton";
import Food from "../../assets/food.jpg";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Food} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
