import React from 'react'

import Elipse from './Elipse'
import Circle from './Circle'

export default class Animation extends React.Component {
  createBackLayer = () => {
    let elements = []
    let count = 15
    while(count > 0) {
      elements.push(<Elipse key={'elipse' + count}/>)
      count--
    }
    return <g id='shapes-behind'>{elements}</g>
  }

  createFrontLayer = () => {
    let elements = []
    let count = 15
    while(count > 0) {
      elements.push(<Circle key={'circle' + count}/>)
      count--
    }
    return <g id='shapes-front'>{elements}</g>
  }

  render() {
    return (
      <div className='snow'>
        <svg viewBox='0 0 1024 1536' preserveAspectRatio='xMidYMax slice'>
          <g fill='#00A7E1' fillOpacity='0.1' transform='translate(55 42)'>
            {this.createBackLayer()}
          </g>
          <g fill='#00A7E1' fillOpacity='0.3' transform='translate(65 63)'>
            {this.createFrontLayer()}
          </g>
        </svg>
      </div>
    )
  }
}
