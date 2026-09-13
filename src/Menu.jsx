import { useEffect, useState, useRef, useMemo } from "react";
import { Dish } from "./Dish";
// import { menu } from "./data";
import { CatagoryBar } from "./CatagoryBar";
import { DishList } from "./DishList";
import { OrderForm } from "./OrderForm";
import { useFetch } from "./useFetch";

export function Menu() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("ALL");
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const searchRef = useRef(null);

  const { data, loading, error } = useFetch(
    `dishes.json`);

  useEffect(() => {
    if (!loading) {
      searchRef.current?.focus();
    }
  }, [loading]);


  if (loading) {
    return <p className="loading-state">Loading menu...</p>;
  }
  if (error) {
    return <p className="error-state">Error: {error}</p>;
  }

  const menu = data?.items ?? [];
  const filteredMenu = useMemo(()=>{
    return  category === "ALL" ? menu : menu.filter((dish) => dish.category === category);
  }, [menu, category])
   
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
