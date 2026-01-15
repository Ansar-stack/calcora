import React from 'react'

const Result = ({heading, arr = []}) => {
  return (
    <div className="result">
        <h3 className="result_heading">{heading}</h3>
        {arr.map((elem, index) => (
          <div key={index} className="result_item">
            <p>{elem.title}</p>
            <span>{elem.value}</span>
          </div>
        ))}
      </div>
  )
}

export default Result