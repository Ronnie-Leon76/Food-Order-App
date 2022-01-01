import React, { useContext } from "react";
import cartContext from "../../../Store/cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cartCtx = useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
