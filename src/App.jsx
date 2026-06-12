import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBR from "./components/NavbarBR";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
      <NavbarBR />
      <ItemListContainer saludo={"Bienvenidos a mi tienda online"} />
      <ItemDetailContainer />

    </>
  )
}
  export default App
