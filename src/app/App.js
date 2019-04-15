import React from 'react'
import '../styles/styles'
import Animation from './components/Animation'

class App extends React.Component {
  render() {
    return ( 
      <div className='main'>
        <Animation />
        <div className='content'>
          <h1 className='text-center'>ROSIE WATSON</h1>
        </div>       
      </div>
    )
  }
}

  export default App
