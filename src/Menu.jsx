import { useEffect, useState, useRef } from "react";
import { Dish } from "./Dish";
// import { menu } from "./data";
import { CatagoryBar } from "./CatagoryBar";
import { DishList } from "./DishList";
import { OrderForm } from "./OrderForm";

export function Menu() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("ALL");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      searchRef.current?.focus();
    }
  }, [loading]);

  useEffect(() => {
    const ctrl = new AbortController();
    async function loadData() {
      try {
        const response = await fetch(`dishes.json?category?=${category}`, { signal: ctrl.signal });
        if (!response.ok) {
          throw new Error("Unable to load the menu");
        }
        const data = await response.json();
        setMenu(data.items);
      } catch (e) {
        if (e.name === "AbortError") {
          return;
        }
        console.error("Error Fetching data: ", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
    return () => ctrl.abort();
  }, [category])

  if (loading) {
    return <p className="loading-state">Loading menu...</p>;
  }
  if (error) {
    return <p className="error-state">Error: {error}</p>;
  }

  const filteredMenu =
    category === "ALL" ? menu : menu.filter((dish) => dish.category === category);

  return (
    <div>
      <input className="search-input" ref={searchRef} type="search" />

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
