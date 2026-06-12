import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
      if(count < stock){
        setCount(count + 1)
      }
    }

    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }  
    }

    const purchase = () => {

    }

  return (
    <div>
      <button className='btn btn-primary' onClick={restar} disabled={count === 0}>
        -
      </button>
      <span className='mx-3'>{count}</span>
      <button className='btn btn-primary' onClick={sumar} disabled={count === stock}>
        +
      </button>
    </div>
  )
}

export default ItemCount
