import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NadBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

import "./App.css";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a mi ecommerce" />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a mi ecommerce" />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;