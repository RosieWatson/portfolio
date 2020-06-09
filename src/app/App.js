import React from 'react'
import '../styles/all'

import ArrowButton from './components/ArrowButton'
import Card from './components/Card'
import Github from './components/Github'

class App extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.experienceDiv = React.createRef()
    this.educationDiv = React.createRef()
    this.projectsDiv = React.createRef()
    this.skillsDiv = React.createRef()
 }

  handleClick = (div) => {
    if(this[div].current){
      this[div].current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }


  render() {
    return (
      <div className='slide-container'>
        <section>
          <div className='main'>
            <div className='pl-1 pl-md-5 m-4 w-100'>
              <a href='mailto:rosiewatson@me.com' target='_blank' rel='noopener'>
                <h1 className='mb-3'>ROSIE WATSON<i className='fas fa-envelope fa-xs' /></h1>
              </a>
              <h4>Front-End Developer</h4>
            </div>
            <ArrowButton page={'experience'} handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.experienceDiv}>
          <div className='main'>
            <div className='card-container pl-3 pl-md-5 ml-4'>
              <Card cardId={'experience'} />
            </div>
            <ArrowButton page={'education'} classes='pr-3' handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.educationDiv}>
          <div className='main'>
            <div className='card-container pl-3 pl-md-5 ml-4'>
              <Card cardId={'education'} />
            </div>
            <ArrowButton page={'skills'} classes='pr-3' handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.skillsDiv}>
          <div className='main'>
            <div className='card-container pl-3 pl-md-5 ml-4'>
              <Card cardId={'skills'} />
            </div>
            <ArrowButton page={'projects'} classes='pr-3' handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.projectsDiv}>
          <div className='main'>
            <div className='card-container pl-1 pl-md-5 m-4'>
              <Card cardId={'projects'} />
            </div>
          </div>
        </section>
        <Github />
      </div>
    )
  }
}

export default App
