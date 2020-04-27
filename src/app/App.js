import React from 'react'
import '../styles/styles'

import Animation from './components/Animation'
import Github from './components/Github'

class App extends React.Component {
  render() {
    return ( 
      <div className='main display-flex align-items-center'>
        <Animation />
        <div className='pl-1 pl-md-5 m-5 w-100'>
          <h1>ROSIE WATSON</h1>
          <h2>Front-End Developer</h2>
          <h2>JavaScript Lover</h2>
          <Github />
        </div>
        <div className='navbar'></div>
      </div>
    )
  }
}

export default App
