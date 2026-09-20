import { Dish } from "./Dish"

export function DishList({filter, total, setTotal}){
    return (
        <div className="items">
          {filter.map((dish) => (
            <Dish
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              category={dish.category}
              spicy={dish.spicy}
              totalPrice = {total}
              makeTotal = {setTotal}
            />
          ))}
        </div>
    )
}