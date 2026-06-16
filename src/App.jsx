import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBR from "./components/NavbarBR";
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CartView from './components/CartView';
import CheckoutRHF from './components/CheckoutRHF'
import HeroCarousel from './components/HeroCarousel';
import './CSS/general.css'
import './CSS/navbar.css'
import './CSS/home.css'
import './CSS/itemList.css'
import './CSS/item.css'
import './CSS/itemDetail.css'
import './CSS/itemCount.css'
import './CSS/cart.css'
import './CSS/checkout.css'
import './CSS/loader.css'
import './CSS/error.css'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>

        <NavbarBR />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <ItemListContainer saludo={"Glucon - Suministros para diabéticos en Uruguay"} />
              </>
            }
          />

          <Route
            path="/category/:type"
            element={<ItemListContainer saludo={"Categoría"} />}
          />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          <Route
            path="/cart"
            element={<CartContainer />}
          />

          <Route
            path="/checkout"
            element={<CheckoutRHF />}
          />

          <Route
            path="*"
            element={<Error />}
          />

        </Routes>

        <Footer />

      </CartProvider>
    </BrowserRouter>
  )
}
export default App
