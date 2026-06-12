import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h1>El carrito está vacío</h1>
      <h2>Agrega productos para finalizar tu compra</h2>
      <Link to="/">Volver a comprar</Link>
    </div>
  )
}

export default EmptyCart
