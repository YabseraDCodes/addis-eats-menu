import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { OrderForm } from "./OrderForm";
import { CartProvider } from "./CartProvider";
import "./App.css";


function App() {


  return (
    <CartProvider>
      <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <Menu />
          </div>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
