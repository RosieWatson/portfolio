import React from 'react'
import '../styles/styles'

import Animation from './components/Animation'
import ArrowButton from './components/ArrowButton'
import Card from './components/Card'
import Github from './components/Github'

class App extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.experienceDiv = React.createRef()
    this.educationDiv = React.createRef()
    this.skillsDiv = React.createRef()
 }

  handleClick = (div) => {
    if(this[div].current){
      this[div].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }


  render() {
    return (
      <div className='slide-container'>
        <section>
          <div className='main'>
            <Animation />
            <div className='pl-1 pl-md-5 m-4 w-100'>
              <h1 className='mb-3'>ROSIE WATSON</h1>
              <h4>Front-End Developer</h4>
            </div>
            <ArrowButton page={'experience'} handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.experienceDiv}>
          <div className='main'>
            <Animation />
            <div className='card-container pl-3 pl-md-5 ml-4'>
              <Card cardId={'experience'} />
            </div>
            <ArrowButton page={'education'} classes='pr-3' handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.educationDiv}>
          <div className='main'>
            <Animation />
            <div className='card-container pl-3 pl-md-5 ml-4'>
              <Card cardId={'education'} />
            </div>
            <ArrowButton page={'skills'} classes='pr-3' handleClick={this.handleClick}/>
          </div>
        </section>
        <section ref={this.skillsDiv}>
          <div className='main'>
            <Animation />
            <div className='card-container pl-1 pl-md-5 m-4'>
              <Card cardId={'skills'} />
            </div>
          </div>
        </section>
        <Github />
      </div>
    )
  }
}

export default App
