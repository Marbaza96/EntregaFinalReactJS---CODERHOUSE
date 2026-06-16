import React from 'react'
import Item from "./Item";

const ItemList = ({data}) => {
  return (
    <div className="catalog-grid">
      {data.map((prod)=><Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
