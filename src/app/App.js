import React from 'react'
import '../styles/styles'

import Animation from './components/Animation'
import Picture from '../assets/web_summit.jpg'

class App extends React.Component {
  render() {
    return ( 
      <div className='main'>
        <Animation />
        <div className='content position-absolute pt-3'>
          <h1 className='text-center'>ROSIE WATSON</h1>
          <img src={Picture} className='d-block ml-auto mr-auto' />
          <h2 className='text-white text-center p-2 m-3 block-xs'>Full-stack Web Developer</h2>
        </div>
        <div className='navbar'></div>
      </div>
    )
  }
}

export default App
