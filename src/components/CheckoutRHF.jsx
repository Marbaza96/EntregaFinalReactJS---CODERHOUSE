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
    const {name, lastname, address, email}=data

        setLoading(true)
        let orden = {
            comprador: {name, lastname, address, email},
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
                    ? <div>
                        <h1>Muchas gracias por tu compra!</h1>
                        <h2> Tu orden es la N°: {orderId} </h2>
                        <Link className="btn btn-dark" to="/">Volver a la home</Link>


                    </div>
                    : <div>
                        <h1>Complete sus datos para finalizar la compra</h1>

                        <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit(terminarCompra)}>
                            <input className="form-control" name="name" type="text" placeholder="Ingrese su nombre" {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === "required" && <small style={{ color: "red" }}>Complete campo obligatorio</small>}
                            {errors?.name?.type === "minLength" && <small style={{ color: "red" }}>El nombre debe contener mínimo 3 caracteres</small>}
                            <input className="form-control" name="lastname" type="text" placeholder="Ingrese su apellido" {...register("lastname", { required: true, minLength: 3 })} />
                            {errors?.lastname?.type === "required" && <small style={{ color: "red" }}>Complete campo obligatorio</small>}
                            {errors?.lastname?.type === "minLength" && <small style={{ color: "red" }}>El apellido debe contener mínimo 3 caracteres</small>}
                            <input className="form-control" name="address" type="text" placeholder="Ingrese su dirección" {...register("address", { required: true, maxLength: 40 })} />
                            {errors?.address?.type === "required" && <small style={{ color: "red" }}>Complete campo obligatorio</small>}
                            {errors?.address?.type === "maxLength" && <small style={{ color: "red" }}>La dirección debe contener máximo 30 caracteres</small>}
                            <input className="form-control" name="mail" type="email" placeholder="Ingrese su correo electrónico" {...register("email", { required: true })} />
                            {errors?.email?.type === "required" && <small style={{ color: "red" }}>Complete campo obligatorio</small>}
                            <input className="form-control" name="secondmail" type="email" placeholder="Repite tu correo electrónico"
                                {...register("secondemail", { required: true, validate: { equalsMails: mail2 => mail2 === getValues().email } })} />
                            {errors?.secondemail?.type === "required" && <small style={{ color: "red" }}>Complete campo obligatorio</small>}
                            {errors?.secondemail?.type === "equalsMails" && <small style={{ color: "red" }}>Los correos no coinciden</small>}
                            <button type="submit" className="btn btn-success" disabled={loading} >{loading ? 'Cargando compra...' : "Finalizar la compra"} </button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckoutRHF