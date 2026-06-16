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
    <div className="item-count">

      <div className="item-count-row">

        <div className="item-count-controls">

          <button
            className="item-count-btn"
            onClick={restar}
            disabled={count === 0}
          >
            -
          </button>

          <span className="item-count-number">{count}</span>

          <button
            className="item-count-btn"
            onClick={sumar}
            disabled={count === stock}
          >
            +
          </button>

        </div>

        <button
          className="item-count-buy"
          onClick={purchase}
          disabled={count === 0 || stock === 0}
        >
          Agregar
        </button>

      </div>

    </div>
  )
}

export default ItemCount
