import PropTypes from "prop-types";
import { Card } from "../ui/Card.jsx";
import { useState } from "react";
import { useContext, createContext } from "react"
import { cartContext } from "../cart/CartProvider.jsx"
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore.js";


export function Dish({ dish }) {
  const [count, setCount] = useState(0);
  // const { cart, dispatch } = useContext(cartContext);
  const {cart, addItem, removeItem} = useCartStore();

  return (
    <Card>
      <div>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>

        {dish.spicy && <span className="spicy-badge"> 🌶 Spicy</span>}
      </div>
      <div className="food-bottom">
        <span className="price">
          {dish.price} {dish.currency}
        </span>
        <span className={`catagory catagory-${dish.category}`}>
          {dish.category}
        </span>
      </div>
      <div className="item-actions">
        {/* <p>Quantity: {cart.length}</p> */}
        {cart.some((item) => item.id === dish.id) ?
          (<button className="removeBtn" onClick={() => removeItem(dish.id)}>
            Remove from Cart</button>)
          : (<button className="addBtn" onClick={() => addItem(dish)}>
            Add to Cart </button>)}
        <Link className="viewDetails" to={`/Menu/${dish.id}`}>View Details</Link>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  dish: PropTypes.object
};

// Dish.defaultProps = {
//   currency: "ETB"
// };
