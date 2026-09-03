import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { OrderForm } from "./OrderForm";
import "./App.css";

function App() {
  return (
    <div className="j">
      <Header />

      <div className="Main">
        <div className="Main-overlay">
          <Menu />
          <OrderForm/>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
