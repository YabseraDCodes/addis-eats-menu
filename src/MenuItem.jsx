import './MenuItem.css'

export function MenuItem({ name, price, description, catagory }) {
    return (
        <div className="food-card">
            {/* <p>|| IDNO.: {id}</p> */}
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="food-bottom">
                <span className="price">{price} ETB</span>
                <span className="catagory">{catagory}</span>
            </div>
        </div>
    )
}