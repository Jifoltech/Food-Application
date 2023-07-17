import { useRef, useState } from "react";
import Input from "../../UI/input";
import classes from "./mealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, updateAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1 ||
      enteredAmountnumber > 5
    ) {
      updateAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountnumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
