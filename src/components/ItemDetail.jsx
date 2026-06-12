import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ detail }) => {
  return (
    <div>
      <h2>Detalle del producto: {detail.name}</h2>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Precio: ${detail.price}UYU</p>
      <p>Stock disponible: {detail.stock}</p>
      <ItemCount stock={detail.stock} />
    </div>
  )
}

export default ItemDetail
