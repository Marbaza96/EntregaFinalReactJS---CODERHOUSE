import React from 'react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const {cart, addItem} = useContext(CartContext)
  const onAdd = (cantidad) => {
    addItem(detail,cantidad)
    setPurchase(true);
  }


  return (
    <div>
      <h2>Detalle del producto: {detail.name}</h2>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Precio: ${detail.price}UYU</p>
      <p>Stock disponible: {detail.stock}</p>
      {purchase ? <Link to="/cart">Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd} />}
      {purchase ? <Link to="/">Seguir comprando</Link> : null}
    </div>
  )
}

export default ItemDetail
