import { useEffect, useState } from "react";
import { getProducts, productos } from "../mock/asyncData";
import Item from "./Item";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection } from "firebase/firestore";
import { db } from "../service/firebase"
import { getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { type } = useParams();

    //FIREBASE
    useEffect(() => {
        setLoader(true);

        //CONEXIÓN A LA COLLECTION Y FILTRAR CONECTANDO CON QUERY
        const prodCollection = type
            ? query(collection(db, "items"), where("category", "==", type))
            : collection(db, "items");


        getDocs(prodCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });

                setData(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));

    }, [type])

    return (
        <>
            {loader
                ? <LoaderComponent text={type ? 'Cargando categoría...' : 'Cargando productos...'} />
                : <div>
                    <div className="catalog-header">
                        <h1 className="catalog-title">
                            {saludo}
                            {type && <span> - {type}</span>}
                        </h1>

                        <p className="catalog-subtitle">
                            Catálogo completo
                        </p>
                    </div>
                    <ItemList data={data} />
                </div>}
        </>
    )
}



export default ItemListContainer  