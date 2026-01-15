import React from 'react'

const ErrorComponent = ({error, classes}) => {
  return (
     <p className={`font-semibold text-red-600 ${classes}`}>{error}</p>
  )
}

export default ErrorComponent