import React from 'react'
import Item from "./Item";

const ItemList = ({data}) => {
  return (
    <div>
      {data.map((prod)=><Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
