import PropTypes from "prop-types";
import { Card } from "./Card";
import { useState } from "react";
import { useContext, createContext } from "react"
import {cartContext} from "./App.jsx"


export function Dish({ name, price, description, category, spicy, currency = "ETB", totalPrice, makeTotal }) {
  const [count, setCount] = useState(0);
  const {cart, dispatch} = useContext(cartContext);

  return (
    <Card>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>

        {spicy && <span className="spicy-badge">Spicy</span>}
      </div>
      <div className="food-bottom">
        <span className="price">
          {price} {currency}
        </span>
        <span className={`catagory catagory-${category}`}>
          {category}
        </span>
      </div>
      <div className="addItem">
        <p>Quantity: {cart.length}</p>
        <button className="addBtn" onClick={() => dispatch({type: "add", content: {name, price, description, category, spicy, currency, totalPrice}})}>ADD</button>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  spicy: PropTypes.bool,
  currency: PropTypes.string
};

Dish.defaultProps = {
  currency: "ETB"
};
