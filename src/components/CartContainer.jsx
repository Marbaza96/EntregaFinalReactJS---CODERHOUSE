import React from 'react'
import CartView from './CartView';
import {CartContext} from '../context/CartContext';
import EmptyCart from './EmptyCart';
import { useContext } from 'react';

const CartContainer = () => {
    const {cart} = useContext(CartContext);
    
  return (
    <>
      {cart.length > 0 ? <CartView /> : <EmptyCart />}
    </>
  )
}

export default CartContainer
