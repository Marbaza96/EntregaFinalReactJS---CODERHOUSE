import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const purchase = () => {
    onAdd(count)

  }

  return (
    <div>
      <div>
        <button className='btn btn-primary' onClick={restar} disabled={count === 0}>
          -
        </button>
        <span className='mx-3'>{count}</span>
        <button className='btn btn-primary' onClick={sumar} disabled={count === stock}>
          +
        </button>
      </div>
      <button className="btn btn-primary buy-btn" onClick={purchase} disabled={count === 0 || stock === 0}>
        Comprar
      </button>
    </div>

  )
}

export default ItemCount
