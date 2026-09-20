import { Header } from "./layout/Header";
import { Menu } from "./menu/Menu";
import { Footer } from "./layout/Footer";
import { OrderForm } from "./checkout/OrderForm";
import { CartProvider } from "./cart/CartProvider";
import { Routes, Route } from "react-router-dom";
import Secret from "./Secret";
import NotFound from "./errors/NotFound";
import DishDetail from "./menu/DishDetail";
import "./App.css";
import Layout from "./layout/Layout";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import Login from "./auth/Login";
import RequireAuth from "./auth/RequireAuth";
import { useState } from "react";
import {Home} from "./home/Home"

function App() {

  const [user, setUser] = useState(null);

  return (
    <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="Menu/:id" element={<DishDetail />} />
                <Route path="Cart" element={<Cart/>} />
                <Route path="Checkout" element={<RequireAuth user={user}><Checkout/></RequireAuth>}/>
                <Route path="/Login" element={<Login user={user} setUser={setUser}/>}/>
                <Route path="/*" element={<NotFound />} />
              </Route>
            </Routes>
    </CartProvider>

  );
}

export default App;
