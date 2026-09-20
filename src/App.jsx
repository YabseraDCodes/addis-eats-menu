import { Header } from "./components/Header";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/Footer";
import { OrderForm } from "./pages/OrderForm";
import { CartProvider } from "./contexts/CartProvider";
import { Routes, Route } from "react-router-dom";
import Secret from "./Secret";
import NotFound from "./pages/NotFound";
import DishDetail from "./components/DishDetail";
import "./App.css";
import Layout from "./Layout";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import RequireAuth from "./auth/RequireAuth";
import { useState } from "react";
import {Home} from "./pages/Home"

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
