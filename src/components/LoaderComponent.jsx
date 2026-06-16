import React from 'react'
import { Spinner } from 'react-bootstrap';

const LoaderComponent = ({ text }) => {
  return (
    <div className="loader-container">
      <Spinner
        animation="grow"
        variant="light"
        role="status"
        className="loader-spinner"
      />
      <span className="loader-text">
        {text}
      </span>
    </div>
  )
}

export default LoaderComponent