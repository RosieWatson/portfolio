import React from 'react'

import sellingPoints from '../../lib/sellingPoints'

const Card = ({ cardId }) => {
  const { data, icon, title } = sellingPoints[cardId]

  return (
    <div className='card mr-2' style={{width: '18rem'}}>
      <div className='card-img-top text-center py-3'>
        <i className={`fas ${icon} fa-4x card-icon`}></i>
      </div>
      <h4 className='card-title text-center py-2'>{title}</h4>
      <div className='card-body'>
        {data.map(dataPoint => {
          return (
            <div className='card-text' key={dataPoint.title}>
              <p className='font-weight-bold'>{dataPoint.title}</p>
              <p>{dataPoint.details}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
