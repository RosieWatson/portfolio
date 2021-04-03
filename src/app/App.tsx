import React, { useRef, useState } from 'react'
import '../styles/all'

import ArrowButton from './components/ArrowButton'
import Card from './components/Card'
import Github from './components/Github'
import ProfileSideBar from './components/ProfileSideBar'

const App = () => {
  const [showSideBar, setShowSideBar] = useState(true)

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
    <>
      {/* Better animation */}
      {showSideBar && <ProfileSideBar setShowSideBar={setShowSideBar} />}
      <div className='slide-container'>
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
        {!showSideBar && (
          <button
            className='hide-button ml-3'
            onClick={() => setShowSideBar(true)}
          >
            Show me
          </button>
        )}
      </div>
    </>
  )
}

export default App
