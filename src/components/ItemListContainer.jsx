import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncData";
import Item from "./item";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const {type} = useParams();

    useEffect(() => {
        setLoader(true);
        getProducts()
            .then((res) => { 
                if(type) {
                    setData(res.filter((prod) => prod.category === type));
                } else {
                    setData(res);
                }
             })
            .catch((error) =>console.log(error)) 
            .finally(() => setLoader(false));
    }, [type]);

    return (
        <>
        {loader 
        ? <LoaderComponent text={type ? 'Cargando categoría...' : 'Cargando productos...'} />
        :<div>
            <h1>{saludo}{type && <span> - {type}</span>}</h1>
            <ItemList data={data} />
        </div>}
        </>
    )
}



export default ItemListContainer  