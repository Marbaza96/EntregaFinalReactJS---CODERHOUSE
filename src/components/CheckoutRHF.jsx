import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart"
import { useForm } from "react-hook-form";

const CheckoutRHF = () => {

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clear } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    const terminarCompra = (data) => {
        const { name, lastname, address, email } = data

        setLoading(true)
        let orden = {
            comprador: { name, lastname, address, email },
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const orderColl = collection(db, "orders")
        addDoc(orderColl, orden)
            .then((res) => {
                clear()
                setOrderId(res.id)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {
                orderId
                    ? (
                        <main className="checkout-container">
                            <section className="checkout-success">
                                <h1>¡Muchas gracias por tu compra!</h1>
                                <h2>Tu orden es la N°: {orderId}</h2>

                                <Link className="checkout-home-btn" to="/">
                                    Volver a la home
                                </Link>
                            </section>
                        </main>
                    )
                    : (
                        <main className="checkout-container">
                            <section className="checkout-card">
                                <h1 className="checkout-title">
                                    Complete sus datos para finalizar la compra
                                </h1>
                                <p className="checkout-subtitle">
                                    Complete el formulario para generar tu orden de compra.
                                </p>

                                <div className="checkout-total">
                                    Total de la compra: ${total()} UYU
                                </div>

                                <form className="checkout-form" onSubmit={handleSubmit(terminarCompra)}>

                                    <input
                                        className="checkout-input"
                                        name="name"
                                        type="text"
                                        placeholder="Ingrese su nombre"
                                        {...register("name", { required: true, minLength: 3 })}
                                    />
                                    {errors?.name?.type === "required" && <small className="checkout-error">Complete campo obligatorio</small>}
                                    {errors?.name?.type === "minLength" && <small className="checkout-error">El nombre debe contener mínimo 3 caracteres</small>}

                                    <input
                                        className="checkout-input"
                                        name="lastname"
                                        type="text"
                                        placeholder="Ingrese su apellido"
                                        {...register("lastname", { required: true, minLength: 3 })}
                                    />
                                    {errors?.lastname?.type === "required" && <small className="checkout-error">Complete campo obligatorio</small>}
                                    {errors?.lastname?.type === "minLength" && <small className="checkout-error">El apellido debe contener mínimo 3 caracteres</small>}

                                    <input
                                        className="checkout-input"
                                        name="address"
                                        type="text"
                                        placeholder="Ingrese su dirección"
                                        {...register("address", { required: true, maxLength: 40 })}
                                    />
                                    {errors?.address?.type === "required" && <small className="checkout-error">Complete campo obligatorio</small>}
                                    {errors?.address?.type === "maxLength" && <small className="checkout-error">La dirección debe contener máximo 40 caracteres</small>}

                                    <input
                                        className="checkout-input"
                                        name="mail"
                                        type="email"
                                        placeholder="Ingrese su correo electrónico"
                                        {...register("email", { required: true })}
                                    />
                                    {errors?.email?.type === "required" && <small className="checkout-error">Complete campo obligatorio</small>}

                                    <input
                                        className="checkout-input"
                                        name="secondmail"
                                        type="email"
                                        placeholder="Repite tu correo electrónico"
                                        {...register("secondemail", {
                                            required: true,
                                            validate: {
                                                equalsMails: mail2 => mail2 === getValues().email
                                            }
                                        })}
                                    />
                                    {errors?.secondemail?.type === "required" && <small className="checkout-error">Complete campo obligatorio</small>}
                                    {errors?.secondemail?.type === "equalsMails" && <small className="checkout-error">Los correos no coinciden</small>}

                                    <button
                                        type="submit"
                                        className="checkout-submit"
                                        disabled={loading}
                                    >
                                        {loading ? 'Cargando compra...' : "Finalizar la compra"}
                                    </button>
                                </form>
                            </section>
                        </main>
                    )
            }
        </>
    )
}

export default CheckoutRHF