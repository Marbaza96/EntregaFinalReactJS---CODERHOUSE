import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <main className="empty-cart">
      <div className="empty-cart-box">
        <h1>Tu carrito está vacío 🛒 </h1>

        <p>
          Todavía no agregaste productos a tu carrito.
        </p>

        <Link to="/" className="empty-cart-btn">
          Ir al catálogo
        </Link>
      </div>
    </main>
  )
}

export default EmptyCart
