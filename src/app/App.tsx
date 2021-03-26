import React, { useRef } from 'react'
import '../styles/all'

import ArrowButton from './components/ArrowButton'
import Card from './components/Card'
import Github from './components/Github'

const App = () => {
  const experienceDiv = useRef(null)
  const educationDiv = useRef(null)
  const projectsDiv = useRef(null)
  const skillsDiv = useRef(null)

  const handleClick = (divRef) => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='slide-container'>
      <section>
        <div className='main'>
          <div className='pl-1 pl-md-5 m-4 w-100'>
            <a href='mailto:rosiewatson@me.com' target='_blank' rel='noopener'>
              <h1 className='mb-3'>
                ROSIE WATSON
                <i className='fas fa-envelope fa-xs' />
              </h1>
            </a>
            <h4>Full Stack Developer</h4>
          </div>
          <ArrowButton
            page='experience'
            handleClick={() => handleClick(experienceDiv)}
          />
        </div>
      </section>
      <section ref={experienceDiv}>
        <div className='main'>
          <div className='card-container pl-3 pl-md-5 ml-4'>
            <Card cardId='experience' />
          </div>
          <ArrowButton
            page='education'
            classes='pr-3'
            handleClick={() => handleClick(educationDiv)}
          />
        </div>
      </section>
      <section ref={educationDiv}>
        <div className='main'>
          <div className='card-container pl-3 pl-md-5 ml-4'>
            <Card cardId='education' />
          </div>
          <ArrowButton
            page='skills'
            classes='pr-3'
            handleClick={() => handleClick(skillsDiv)}
          />
        </div>
      </section>
      <section ref={skillsDiv}>
        <div className='main'>
          <div className='card-container pl-3 pl-md-5 ml-4'>
            <Card cardId='skills' />
          </div>
          <ArrowButton
            page='projects'
            classes='pr-3'
            handleClick={() => handleClick(projectsDiv)}
          />
        </div>
      </section>
      <section ref={projectsDiv}>
        <div className='main'>
          <div className='card-container pl-1 pl-md-5 m-4'>
            <Card cardId='projects' />
          </div>
        </div>
      </section>
      <Github />
    </div>
  )
}

export default App
