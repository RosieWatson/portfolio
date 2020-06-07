import React from 'react'

import sellingPoints from '../../lib/sellingPoints'

const Card = ({ cardId }) => {
  const { data, icon, title } = sellingPoints[cardId]

  return (
    <div className='card mr-2'>
      <div className='card-img-top text-center py-3'>
        <i className={`fas ${icon} fa-4x card-icon`}></i>
      </div>
      <h4 className='card-title text-center py-2 mb-0'>{title}</h4>
      <div className='card-body'>
        {data.map((dataPoint, index) => {
          const { details, title, titleLink } = dataPoint
          return (
            <>
              { index!==0 && <hr /> }
              <div className='card-text' key={title}>
                <h5 className='details-title font-weight-bold'>
                {
                  titleLink ?
                    <a href={titleLink} target='_blank' rel='noopener'>{title}</a> :
                    title
                }
                </h5>
                {details.map(detail => <p>{detail}</p>)}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Card
