import React from 'react'
import { Spinner } from 'react-bootstrap';

const LoaderComponent = ({ text }) => {
  return (
    <div>
      <Spinner animation="grow" variant="dark" role="status"/>
      <span className="ms-2">{text}</span>
    </div>
  )
}

export default LoaderComponent
