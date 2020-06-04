import React from 'react'

const Ellipse = () => {
  const cx = Math.floor(Math.random() * 900) + 5
  const cy = Math.floor(Math.random() * 1600) + 100

  return (
    <ellipse cx={cx} cy={cy} rx='6' ry='5.5' />
  )
}

export default Ellipse
