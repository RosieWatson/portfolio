import React from 'react'
import '../styles/styles'

import Animation from './components/Animation'
import Card from './components/Card'
import Github from './components/Github'

class App extends React.Component {
  constructor(props){
    super(props)

    this.experienceDiv = React.createRef()
    this.educationDiv = React.createRef()
 }

  handleOnClick = (div) => {
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
            <button
              aria-label='Go to experience'
              onClick={() => this.handleOnClick('experienceDiv')}
            >
              <h1><i className='fas fa-arrow-circle-right'></i></h1>
            </button>
          </div>
        </section>
        <section ref={this.experienceDiv}>
        <div className='main'>
            <Animation />
            <div className='d-flex pl-3 pl-md-5 ml-4 w-100 justify-content-center'>
              <Card cardId={'experience'} />
            </div>
            <button
              aria-label='Go to Education'
              className='pr-3'
              onClick={() => this.handleOnClick('educationDiv')}
            >
              <h1><i className='fas fa-arrow-circle-right'></i></h1>
            </button>
          </div>
        </section>
        <section ref={this.educationDiv}>
          <div className='main'>
            <Animation />
            <div className='d-flex pl-1 pl-md-5 m-4 w-100 justify-content-center'>
              <Card cardId={'education'} />
            </div>
          </div>
        </section>
        <Github />
      </div>
    )
  }
}

export default App
