import React from 'react'

import sellingPoints from '../../lib/sellingPoints'

const Card = ({ cardId }) => {
  const { data, icon, title } = sellingPoints[cardId]

  return (
    <div className='card mr-2' style={{width: '18rem'}}>
      <div className='card-img-top text-center pt-3'>
        <i className={`fas ${icon} fa-4x`}></i>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {data.map(dataPoint => {
          return (
            <div className='card-text' key={dataPoint.title}>
              <p>{dataPoint.title}</p>
              <p>{dataPoint.details}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
