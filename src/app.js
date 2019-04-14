import React from 'react'
import ReactDOM from 'react-dom'
import './styles.less'

class App extends React.Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-center'>TITLE</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
