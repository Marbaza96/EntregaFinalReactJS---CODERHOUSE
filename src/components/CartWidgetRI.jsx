import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = () => {
    const { cart, totalQty } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />

            {cart.length > 0 && (
                <Badge className="cart-badge">
                    {totalQty()}
                </Badge>
            )}
        </div>
    );
}
export default CartWidgetRI;