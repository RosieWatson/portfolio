import React from 'react'

const ArrowButton = ({ handleClick, page, classes }) => (
  <button
    aria-label={`Go to ${page}`}
    onClick={() => handleClick(`${page}Div`)}
    className={classes}
  >
    <h1><i className='fas fa-arrow-circle-right'></i></h1>
  </button>
)

export default ArrowButton
