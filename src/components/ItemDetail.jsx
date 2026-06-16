import React from 'react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from "sweetalert2";



const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const { cart, addItem } = useContext(CartContext)
  const onAdd = (cantidad) => {
    addItem(detail, cantidad)
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      text: `${cantidad} unidad(es) de ${detail.name}`,
      timer: 1800,
      showConfirmButton: false,
      background: "#2e4057",
      color: "#ffffff",
      iconColor: "#ff5c1f"
    })
    setPurchase(true);
  }

  return (
    <div className="detail-container">
      <div className="detail-card">

        <div className="detail-img-box">
          <img className="detail-img" src={detail.img} alt={detail.name} />
        </div>

        <div className="detail-info">
          <h2 className="detail-title">Detalle del producto: {detail.name}</h2>

          <p className="detail-description">{detail.description}</p>

          <p className="detail-price">Precio: ${detail.price} UYU</p>

          <p className="detail-stock">Stock disponible: {detail.stock}</p>

          {
            purchase
              ? (
                <div className="detail-actions">
                  <Link className="detail-btn-orange" to="/cart">
                    Ir al carrito
                  </Link>

                  <Link className="detail-btn-blue" to="/">
                    Seguir comprando
                  </Link>
                </div>
              )
              : (
                <ItemCount stock={detail.stock} onAdd={onAdd} />
              )
          }
        </div>

      </div>
    </div>
  )
}

export default ItemDetail
