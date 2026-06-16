import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

function Item({ prod }) {
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(prod, cantidad);

    Swal.fire({
      title: "Producto agregado",
      text: `${cantidad} unidad/es de ${prod.name} se agregaron al carrito`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ff5b1f",
      background: "#172536",
      color: "#ffffff"
    });
  };

  return (
    <Card className="product-card">
      <Card.Img className="product-card-img" variant="top" src={prod.img} />

      <Card.Body className="product-card-body">
        <Card.Title className="product-card-title">{prod.name}</Card.Title>

        <Card.Text className="product-card-description">
          {prod.description}
        </Card.Text>

        <Card.Text className="product-card-price">
          ${prod.price} UYU
        </Card.Text>

        <Card.Text className="product-card-stock">
          Stock: {prod.stock}
        </Card.Text>

        <ItemCount stock={prod.stock} onAdd={onAdd} />

        <Link className="btn btn-glucon" to={`/item/${prod.id}`}>
          Ver más...
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
