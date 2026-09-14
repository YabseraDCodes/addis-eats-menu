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


function App() {


  return (
    <CartProvider>
      <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route index element={<Menu />} />
              <Route path="/sec" element={<Secret />} />
              <Route path="/Menu/:id" element={<DishDetail/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </CartProvider>

  );
}

export default App;
