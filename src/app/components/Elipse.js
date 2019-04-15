import React from 'react'

export default class Elipse extends React.Component {
  getCX = () => Math.floor(Math.random() * 900) + 5
  getCY = () => Math.floor(Math.random() * 1600) + 100

  render() {
    return (
      <ellipse cx={this.getCX()} cy={this.getCY()} rx='6' ry='5.5' />
    )
  }
}
