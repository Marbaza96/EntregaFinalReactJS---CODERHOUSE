import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/asyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({});
    const [loader, setLoader] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        getOneProduct(id)
            .then((res) => { setDetail(res); })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));
    }, [id])

  return (
  <>
    {loader ? (
      <LoaderComponent text="Cargando detalle..." />
    ) : (
      <ItemDetail detail={detail} />
    )}
  </>
);
}

export default ItemDetailContainer
