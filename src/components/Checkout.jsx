import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart"


const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const { cart, total, clear } = useContext(CartContext)


    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    console.log(buyer, "comprador")

    const terminarCompra = (e) => {
        e.preventDefault()

        //VALIDACION DEL FORM
        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail) {
            setErrors("Por favor complete todos los campos")
        } else if (buyer.mail !== secondMail) {
            setErrors("Los correos no coinciden")
        } else {
            setErrors(null)
            setLoading(true)
            let orden = {
                comprador: buyer,
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
                .finally(()=> setLoading(false))
        }

    }

    if(!cart.length && !orderId){
        return<EmptyCart/>
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
                        {errors && <span style={{color:'red'}}>{errors}</span>}
                        <form className="p-4 border rounded shadow-sm bg-light" onSubmit={terminarCompra}>
                            <input className="form-control" name="name" type="text" placeholder="Ingrese su nombre" onChange={buyerData} />
                            <input className="form-control" name="lastname" type="text" placeholder="Ingrese su apellido" onChange={buyerData} />
                            <input className="form-control" name="address" type="text" placeholder="Ingrese su dirección" onChange={buyerData} />
                            <input className="form-control" name="mail" type="email" placeholder="Ingrese su correo electrónico" onChange={buyerData} />
                            <input className="form-control" name="secondmail" type="email" placeholder="Repite tu correo electrónico" onChange={(e)=> setSecondMail(e.target.value)} />
                            <button type="submit" className="btn btn-success"disabled={loading} >{loading ? 'Cargando compra...' : "Finalizar la compra"} </button>
                        </form>
                    </div>
            }


        </>
    )
}

export default Checkout