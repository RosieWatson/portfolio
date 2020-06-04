import React from 'react'
import '../styles/styles'

import Animation from './components/Animation'
import Github from './components/Github'

class App extends React.Component {
  constructor(props){
    super(props)

    this.myDivToFocus = React.createRef()
 }

  handleOnClick = () => {
    console.log('hitting this')
    if(this.myDivToFocus.current){
        this.myDivToFocus.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "nearest"
        })
    }
}



  render() {
    return (
      <div className='slide-container'>
        <section>
          <div className='main align-items-center'>
            <Animation />
            <div className='pl-1 pl-md-5 m-4 w-100'>
              <h1 className='mb-3'>ROSIE WATSON</h1>
              <h4>Front-End Developer</h4>
            </div>
            <button onClick={this.handleOnClick}><h1 className='mr-3'><i className='fas fa-arrow-circle-right'></i></h1></button>
          </div>
        </section>
        <section ref={this.myDivToFocus}>
          <div className='main p-4'>
            <Animation />
            <div className='d-flex flex-wrap align-items-center justify-content-around w-100'>
              <div className='card m-5' style={{width: '18rem'}}>
                <div className='card-body'>
                  <h5 className='card-title'>Experience</h5>
                  <p className='card-text'>3+ years of experience with JavaScript.</p>
                </div>
              </div>
              <div className='card m-5' style={{width: '18rem'}}>
                <div className='card-img-top text-center pt-3'>
                  <i className='fas fa-user-graduate fa-4x'></i>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Education</h5>
                  <p className='card-text'>University of Kent</p>
                </div>
              </div>
              <div className='card m-5' style={{width: '18rem'}}>
                <div className='card-body'>
                  <h5 className='card-title'>Skills</h5>
                  <p className='card-text'>React, Redux.</p>
                </div>
            </div>
            </div>
            <button onClick={this.handleOnClick}><h1 className='mr-3'><i className='fas fa-arrow-circle-right'></i></h1></button>
          </div>
        </section>
        <Github />
      </div>
    )
  }
}

export default App
