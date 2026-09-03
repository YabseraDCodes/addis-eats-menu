import { useState } from "react";
import { Dish } from "./Dish";
// import { menu } from "./data";
import { CatagoryBar } from "./CatagoryBar";
import { DishList } from "./DishList";

export const menu = [
    {
      id: 1,
      name: "Qiqil",
      price: 300,
      description: "Traditional Ethiopian Meat Soup",
      category: "MAIN",
      spicy: true,
    },
    {
      id: 2,
      name: "Buna",
      price: 140,
      description: "Traditional Ethiopian coffee",
      category: "DRINK",
      spicy: false,
    },
    {
      id: 3,
      name: "Shiro",
      price: 280,
      description: "Traditional Ethiopian stew",
      category: "MAIN",
      spicy: true,
    },
    {
      id: 4,
      name: "Doro Wot",
      price: 350,
      description: "Spicy Ethiopian chicken stew",
      category: "MAIN",
      spicy: true,
    },
    {
      id: 5,
      name: "Tibs",
      price: 380,
      description: "Fried Ethiopian meat with vegetables",
      category: "MAIN",
      spicy: false,
    },
    {
      id: 6,
      name: "Kitfo",
      price: 420,
      description: "Chopped lean beef seasoned with Ethiopian spices",
      category: "MAIN",
      spicy: false,
    },
    {
      id: 7,
      name: "Firfir",
      price: 250,
      description: "Shredded injera mixed with spicy sauce",
      category: "MAIN",
      spicy: true,
    },
    {
      id: 8,
      name: "Chechebsa",
      price: 220,
      description:
        "Traditional Ethiopian shredded flatbread with spiced butter",
      category: "BREAKFAST",
      spicy: false,
    },
  ];

export function Menu() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("ALL");
  const filteredMenu =
    category === "ALL"
      ? menu
      : menu.filter((dish) => dish.category === category);

  return (
    <div>
    <CatagoryBar selectedCatagory={category} selectCatagory={setCategory}/>

      {filteredMenu.length === 0 ? (
        <p className="empty-state">
          No dishes found in the {category} category.
        </p>
      ) : (
        <DishList filter={filteredMenu} total={total} setTotal={setTotal}/>
      )}
      <h2 className="orderTotal">Order Total: {total}</h2>
    </div>
  );
}
