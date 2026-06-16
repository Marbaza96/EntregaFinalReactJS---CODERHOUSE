import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartView = () => {
    const { cart, clear, removeItem, total, sumarItem, restarItem } = useContext(CartContext)

    const preConfirm = () => {
        Swal.fire({
            title: "¿Estás seguro de borrar todo el carrito?",
            text: "¡No podrás deshacer esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff5b1f",
            cancelButtonColor: "#93cce8",
            confirmButtonText: "Sí, quiero borrar",
            cancelButtonText: "No, cancelar",
            background: "#172536",
            color: "#ffffff"
        }).then((result) => {
            if (result.isConfirmed) {
                clear()

                Swal.fire({
                    title: "Carrito eliminado",
                    icon: "success",
                    confirmButtonColor: "#ff5b1f",
                    background: "#172536",
                    color: "#ffffff"
                })
            }
        });
    }

    return (
        <main className="cart-container">
            <h1 className="cart-title">Carrito de compras</h1>

            <section className="cart-products">
                {cart.map((compra) => (
                    <article className="cart-product" key={compra.id}>
                        <div className="cart-product-img-box">
                            <img className="cart-product-img" src={compra.img} alt={compra.name} />
                        </div>

                        <div className="cart-product-info">
                            <h3>{compra.name}</h3>
                            <p>Cantidad:</p>

                            <div className="cart-quantity-controls">
                                <button
                                    className="cart-qty-btn"
                                    onClick={() => restarItem(compra.id)}
                                    disabled={compra.quantity === 1}
                                >
                                    -
                                </button>

                                <span className="cart-qty-number">{compra.quantity}</span>

                                <button
                                    className="cart-qty-btn"
                                    onClick={() => sumarItem(compra.id)}
                                    disabled={compra.quantity === compra.stock}
                                >
                                    +
                                </button>
                            </div>

                            <p>Subtotal: ${(compra.price) * (compra.quantity)} UYU</p>
                        </div>

                        <button
                            className="cart-delete-btn"
                            onClick={() => removeItem(compra.id)}
                        >
                            Eliminar
                        </button>
                    </article>
                ))}
            </section>

            <section className="cart-summary">
                <h2>Total a pagar: ${total()} UYU</h2>

                <div className="cart-actions">
                    <button className="cart-empty-btn" onClick={preConfirm}>
                        Vaciar carrito
                    </button>

                    <Link to="/" className="cart-secondary-btn">
                        Seguir comprando
                    </Link>

                    <Link className="cart-primary-btn" to="/checkout">
                        Finalizar compra
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default CartView

