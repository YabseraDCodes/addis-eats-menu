export function DishList({filter}){
    return (
        <div className="items">
          {filteredMenu.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              category={dish.category}
              spicy={dish.spicy}
            />
          ))}
        </div>
    )
}