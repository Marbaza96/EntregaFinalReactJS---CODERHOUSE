import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncData";
import Item from "./item";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => { setData(res); });
    }, []);

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList data={data} />
        </div>
    )
}



export default ItemListContainer  