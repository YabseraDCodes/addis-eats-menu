import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { OrderForm } from "./OrderForm";
import { useReducer, useContext, createContext } from "react";
import "./App.css";

function cartReducer(state, dispatch) {
  switch (dispatch.type) {
    case "add":
      return [...state, dispatch.content];
    case "remove":
      return [state.filter((item) => item.name !== dispatch.content.name)];
    case "clear":
      return [];
    default:
      throw new Error("Unknown action: " + dispatch.type);
  }
}

export const cartContext = createContext();


function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <Menu />
          </div>
          <Footer />
        </div>
      </div>
    </cartContext.Provider>
  );
}

export default App;
