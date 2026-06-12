import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidgetRI = () => {
    return (
        <div>
            <FaShoppingCart fontSize={"2rem"} />
            <Badge bg="info">3</Badge>
        </div>
    );
}
export default CartWidgetRI;