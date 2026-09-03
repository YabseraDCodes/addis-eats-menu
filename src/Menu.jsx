import { useState } from "react";
import { Dish } from "./Dish";
import { menu } from "./data";
import { CatagoryBar } from "./CatagoryBar";
import { DishList } from "./DishList";
import { OrderForm } from "./OrderForm";

export function Menu() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("ALL");
  const filteredMenu =
    category === "ALL" ? menu : menu.filter((dish) => dish.category === category);

  return (
    <div>
      <CatagoryBar selectedCatagory={category} selectCatagory={setCategory} />

      {filteredMenu.length === 0 ? (
        <p className="empty-state">
          No dishes found in the {category} category.
        </p>
      ) : (
        <DishList filter={filteredMenu} total={total} setTotal={setTotal} />
      )}
      <OrderForm totalPrice={total} />
    </div>
  );
}
