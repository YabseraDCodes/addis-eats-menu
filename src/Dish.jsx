import PropTypes from "prop-types";
import { Card } from "./Card";
import { useState } from "react";
import "./MenuItem.css";

export function Dish({ name, price, description, category, spicy, currency = "ETB" }) {
  const [count, setCount] = useState(0);
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
        <p>Quantity: {count}</p>
        <button className="addBtn" onClick={() => setCount(count + 1)}>Add</button>
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
