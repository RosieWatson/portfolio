import React from 'react'

export default class Circle extends React.Component {
  getCX = () => Math.floor(Math.random() * 900) + 5
  getCY = () => Math.floor(Math.random() * 1600) + 100

  render() {
    return (
      <circle cx={this.getCX()} cy={this.getCY()}  r='8'/>
    )
  }
}
