import { Dish } from "./Dish"

export function DishList({filter, total, setTotal}){
    return (
        <div className="items">
          {filter.map((dish) => (
            <Dish
              key={dish.id}
              dish = {dish}
            />
          ))}
        </div>
    )
}