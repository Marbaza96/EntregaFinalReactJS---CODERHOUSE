import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/asyncData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({});
    useEffect(() => {
        getOneProduct('1')
            .then((res) => { setDetail(res); });
    }, [])

  return (
    <>
    <ItemDetail detail={detail} />
    </>
  )
}

export default ItemDetailContainer
