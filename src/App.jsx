import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { OrderForm } from "./OrderForm";
import { CartProvider } from "./CartProvider";
import { Routes, Route } from "react-router-dom";
import Secret from "./Secret";
import NotFound from "./NotFound";
import DishDetail from "./DishDetail";
import "./App.css";
import Layout from "./Layout";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  return (
    <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Menu />} />
                <Route path="/sec" element={<Secret />} />
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
