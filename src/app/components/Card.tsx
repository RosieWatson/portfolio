import React from 'react'

import sellingPoints from '../../lib/sellingPoints'

interface CardProps {
  cardId: string
}

const Card = ({ cardId }: CardProps) => {
  const { data, icon, title } = sellingPoints[cardId]

  return (
    <div className='card mr-2'>
      <div className='card-img-top text-center py-3'>
        <i className={`fas ${icon} fa-4x card-icon`}></i>
      </div>
      <div className='card-title'>
        <h4 className='text-center py-2 mb-0'>{title}</h4>
      </div>
      <div className='card-body'>
        {data.map((dataPoint, index) => {
          const { date, details, title, titleLink } = dataPoint
          return (
            <React.Fragment key={title}>
              {index !== 0 && <hr />}
              <div className='card-text'>
                <h5 className='details-title font-weight-bold'>
                  {titleLink ? (
                    <a href={titleLink} target='_blank' rel='noopener'>
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h5>
                {date && <i>{date}</i>}
                {details.map((detail, key) => (
                  <p key={key}>{detail}</p>
                ))}
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Card
