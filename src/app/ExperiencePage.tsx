import React from 'react'

import sellingPoints from '../lib/sellingPoints'

const ExperiencePage = () => (
  <div className='experience-container'>
    {sellingPoints.experience.data.map((dataPoint) => {
      const { date, details, title, titleLink, image } = dataPoint

      return (
        <div className='experience-section' key={title}>
          <img className='experience-image' src={image} />
          <div className='experience-details'>
            <a
              className='h4 experience-title'
              href={titleLink}
              target='_blank'
              rel='noopener'
            >
              {title}
            </a>
            <p>
              <i>{date}</i>
            </p>
            {details.map((detail, key) => (
              <p key={key}>{detail}</p>
            ))}
          </div>
        </div>
      )
    })}
  </div>
)

export default ExperiencePage
