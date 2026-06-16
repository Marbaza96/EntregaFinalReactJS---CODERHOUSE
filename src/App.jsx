import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBR from "./components/NavbarBR";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CartView from './components/CartView';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarBR />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a mi tienda online"} />} />
          <Route path="/category/:type" element={<ItemListContainer saludo={"Categoría"} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
  export default App
