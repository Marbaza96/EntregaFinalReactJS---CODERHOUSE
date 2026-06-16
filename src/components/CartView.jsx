import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CartView = () => {
    const { cart, clear, removeItem, totalQty, total } = useContext(CartContext)
    const preConfirm = () => {
        Swal.fire({
            title: "Estás seguro de borrar todo el carrito?",
            text: "¡No podrás deshacer esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero borrar!",
            cancelButtonText: "No, cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                clear()

                Swal.fire({
                    title: "Carrito eliminado",
                    icon: "success"
                })
            } else {
                Swal.fire({
                    title: "Operación cancelada",
                    icon: "info"
                })
            }
        });
    }


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
            <span>Total a pagar: ${total()}UYU</span>
            <div>
                <button className='btn btn-danger' onClick={preConfirm}>Vaciar carrito</button>
                <Link to="/" className="btn btn-primary">Seguir comprando</Link>
                <Link className='btn btn-success' to='/checkout'>Finalizar compra</Link>
            </div>
        </div>


    )
}

export default CartView


