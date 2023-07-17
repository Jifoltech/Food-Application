import React, { Fragment } from "react";
import MealSummary from "./mealSummary";
import AvailableMeal from "./availableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
