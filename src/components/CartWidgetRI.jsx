import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = () => {
    const { cart, totalQty } = useContext(CartContext);

    return (
        <div>
            <FaShoppingCart fontSize={"2rem"} />
            {cart.length > 0 && <Badge bg="info">{totalQty()}</Badge>}
        </div>
    );
}
export default CartWidgetRI;