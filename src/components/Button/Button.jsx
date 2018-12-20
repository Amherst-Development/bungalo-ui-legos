import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>
    )
  }
}

export default Button
