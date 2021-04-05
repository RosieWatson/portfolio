import React from 'react'

interface ArrowButtonProps {
  handleClick: () => void
  page: string
  classes?: string
}

const ArrowButton = ({ handleClick, page, classes }: ArrowButtonProps) => (
  <button
    aria-label={`Go to ${page}`}
    onClick={handleClick}
    className={classes}
  >
    <h2>
      <i className='fas fa-arrow-circle-right'></i>
    </h2>
  </button>
)

export default ArrowButton
