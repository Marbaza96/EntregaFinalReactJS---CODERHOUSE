import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({});
    const [loader, setLoader] = useState(true);
    const [invalid, setInvalid] = useState(null)
    const {id} = useParams();
    
    //FIREBASE
    useEffect(()=>{
      const docRef = doc(db, "items",id)
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetail({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoader(false))
    },[id])

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
