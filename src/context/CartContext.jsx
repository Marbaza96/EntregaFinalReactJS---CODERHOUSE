import { createContext, useState } from 'react'


export const CartContext = createContext()

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

// AGREGAR un producto al carrito
const addItem =(item,qty)=>{
    if(IsInCart(item.id)){
        setCart(
            cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
        )
    }else{
        setCart([...cart, {...item, quantity: qty}])
    }
}

// ELIMINAR TODO el carrito
const clear =()=>{
    setCart([])
}

// ELIMINAR UN PRODUCTO del carrito
const removeItem =(id)=>{
    setCart(cart.filter((prod) => prod.id !== id))

}

// Obtener la CANTIDAD TOTAL de PRODUCTOS en el carrito
const IsInCart =(id)=>{
    return cart.some((prod) => prod.id === id)

}

//TOTAL A PAGAR
const total =()=>{
    return cart.reduce((acc, prod) => acc += (prod.price * prod.quantity), 0)
}

// CANTIDAD TOTAL de PRODUCTOS en el carrito    
const totalQty =()=>{
    return cart.reduce((acc, prod) => acc += prod.quantity, 0)
}

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, IsInCart, total, totalQty}}>
            {children}
        </CartContext.Provider>

    )
}