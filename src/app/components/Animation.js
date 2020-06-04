import React from 'react'

import Ellipse from './Ellipse'
import Circle from './Circle'

export default class Animation extends React.Component {
  createBackLayer = () => {
    let elements = []
    let count = 15
    while(count > 0) {
      elements.push(<Ellipse key={'ellipse' + count}/>)
      count--
    }
    return <g className='shapes-behind'>{elements}</g>
  }

  createFrontLayer = () => {
    let elements = []
    let count = 15
    while(count > 0) {
      elements.push(<Circle key={'circle' + count}/>)
      count--
    }
    return <g className='shapes-front'>{elements}</g>
  }

  render() {
    return (
      <div className='background'>
        <svg viewBox='0 0 1024 1536' preserveAspectRatio='xMidYMax slice' className='w-100 h-100 position-absolute'>
          <g fill='#E1EFE6' fillOpacity='0.1' transform='translate(55 42)'>
            {this.createBackLayer()}
          </g>
          <g fill='#AEB7B3' fillOpacity='0.3' transform='translate(65 63)'>
            {this.createFrontLayer()}
          </g>
        </svg>
      </div>
    )
  }
}
