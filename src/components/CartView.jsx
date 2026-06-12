import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const CartView = () => {
    const {cart, clear, removeItem, totalQty, total} = useContext(CartContext)


    return (
        <div>
            <h1>Carrito de compras 🛒</h1>
            <div>
                {cart.map((compra) => (
                    <div key={compra.id}>
                        <img src={compra.img} alt={compra.name} />
                        <span>{compra.name}</span>
                        <span>Cantidad de producto/s: {compra.quantity}</span>
                        <span>Total: ${(compra.price) * (compra.quantity)}UYU</span>
                        <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                        

                    </div>
                ))}
            </div>
            <span>Total a pagar: ${total}UYU</span>
            <div>
                <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                <button className='btn btn-success'>Finalizar compra</button>
                <Link to="/" className="btn btn-primary">Seguir comprando</Link>
            </div>
        </div>


    )
}

export default CartView


