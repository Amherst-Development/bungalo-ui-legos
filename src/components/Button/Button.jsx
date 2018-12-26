import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class Button extends Component {
  render() {
    const getColor = (color) => {
      switch (color){
        case 'primary':
          return { main: "#62B9EC", accent: "#FFFFFF" }
        case 'secondary':
          return { main: "#5E5F5F", accent: "#FFFFFF" }
        case 'default':
        default: 
          return { main: "#e0e0e0", accent: "#000000" }
      }
    }
    const DefaultButton = styled.button`
      font-size: 1em;
      margin: 1em;
      padding: 16px 28px;
      border-radius: 0;
      border: none;
      cursor: pointer;
      &:disabled {
        color: #d12028;
        background: #fff;
        cursor: not-allowed;
      }
    `;  
    const FlatButton = styled(DefaultButton)`
      background: ${props => getColor(this.props.color).main};
      color: ${props => getColor(this.props.color).accent};
    `;

    const RaisedButton = styled(DefaultButton)`
      background: ${props => getColor(this.props.color).main};
      color: ${props => getColor(this.props.color).accent};
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    `;
    
    const TextButton = styled(DefaultButton)`
      background: transparent;
      color: ${props => getColor(this.props.color).main};
    `;

    const OutlineButton = styled(DefaultButton)`
      background: transparent;
      color: ${props => getColor(this.props.color).main};
      border: 2px solid ${props => getColor(this.props.color).main};
    `;
  
    switch (this.props.variant) {
      case 'raised': 
        return (<RaisedButton disabled={this.props.disabled}>{this.props.children}</RaisedButton>)
      case 'outlined':
        return (<OutlineButton disabled={this.props.disabled}>{this.props.children}</OutlineButton>)
      case 'text': 
        return (<TextButton disabled={this.props.disabled}>{this.props.children}</TextButton>)
      case 'flat':
      default: 
        return (<FlatButton disabled={this.props.disabled}>{this.props.children}</FlatButton>)
    }
  }
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
}

export default Button
