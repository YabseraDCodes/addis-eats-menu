import { MenuItem } from './MenuItem'
import './MenuItem.css'

const menu = [
    {
        id: 1, name: "Qiqil", price: 300, description: "Traditional Ethiopian Meat Soup",
        category: "MAIN"
    },
    {
        id: 2, name: "Buna", price: 140, description: "Traditional Ethiopian coffee",
        category: "DRINK"
    },
    {
        id: 3, name: "Shiro", price: 280, description: "Traditional Ethiopian stew",
        category: "MAIN"
    },
    {
        id: 4, name: "Doro Wot", price: 350, description: "Spicy Ethiopian chicken stew",
        category: "MAIN"
    },
    {
        id: 5, name: "Tibs", price: 380, description: "Sautéed Ethiopian meat with vegetables",
        category: "MAIN"
    },
    {
        id: 6, name: "Kitfo", price: 420, description: "Minced beef seasoned with Ethiopian spices",
        category: "MAIN"
    },
    {
        id: 7, name: "Firfir", price: 250, description: "Shredded injera mixed with spicy sauce",
        category: "MAIN"
    },
    {
        id: 8, name: "Chechebsa", price: 220, description: "Traditional Ethiopian shredded flatbread with spiced butter",
        category: "BREAKFAST"
    }
];

export function Menu() {
    return (
        <div className='items'>
            {menu.map(d =>
                <MenuItem key={d.id} name={d.name}
                    price={d.price} description={d.description} catagory={d.category}/>
            )}
        </div>
    );
}