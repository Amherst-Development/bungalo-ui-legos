import React, { Component } from 'react'
import styled from 'styled-components'

export class Colors extends Component {

  render() {
    const Color = styled.div`
        background-color: ${props => props.value};
        height: 30px;
        width: 180px;
        padding: 4px 16px;
    `;
    window.console.log(this.props);
    let colorList = Object.keys(this.props.colors).map((key) => {
        return <Color key={key} value={this.props.colors[key]}>{key} : {this.props.colors[key]}</Color>
    })

    return (
      <div>
        {colorList}
      </div>
    )
  }
}

export default Colors



