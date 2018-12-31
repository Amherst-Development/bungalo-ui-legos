import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grey, blue, orange } from '../../colors'

export class Button extends Component {
  render() {
    const getColor = (color) => {
      switch (color){
        case 'primary':
          return { main: blue[500], accent: grey[0] }
        case 'secondary':
          return { main: grey[700], accent: grey[0] }
        case 'default':
        default: 
          return { main: grey[300], accent: grey[1000] }
      }
    }

    const getSize = (size) => {
      switch (size){
        case 'large':
          return { 
            padding: '8px 32px',
            height: '60px',
            fontSize: '1.1rem'
          }
        case 'small': 
          return { 
            padding: '4px 8px',
            height: '31px',
            fontSize: '0.8rem'
          }
        case 'medium':
        default:
          return { 
            padding: '6px 16px',
            height: '36px',
            fontSize: '1rem'
          }
      }
    }
    const DefaultButton = styled.button`
      font-size: ${props => getSize(this.props.size).fontSize};
      white-space: nowrap;
      width: ${props => this.props.fullwidth ? '100%': ''};
      padding: ${props => getSize(this.props.size).padding};
      min-width: 64px;
      min-height: ${props => getSize(this.props.size).height};
      border-radius: 0;
      border: none;
      cursor: pointer;
      &:disabled {
        color: ${grey[300]};
        background: ${grey[100]};
        cursor: not-allowed;
        &:hover {
          color: ${grey[300]};
          background: ${grey[100]};
        }
      }
      &:hover {
        color: ${orange[500]};
        background: ${orange[50]}
      }
    `;  

    const RaisedButton = styled(DefaultButton)`
      background: ${props => getColor(this.props.color).main};
      color: ${props => getColor(this.props.color).accent};
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    `;

    const FlatButton = styled(DefaultButton)`
      background: ${props => getColor(this.props.color).main};
      color: ${props => getColor(this.props.color).accent};
    `;
    
    const OutlinedButton = styled(DefaultButton)`
      background: transparent;
      color: ${props => getColor(this.props.color).main};
      border: 1px solid ${props => getColor(this.props.color).main};
    `;

    const TextButton = styled(DefaultButton)`
      background: transparent;
      color: ${props => getColor(this.props.color).main};
    `;

    switch (this.props.variant) {
      case 'raised': 
        return (<RaisedButton disabled={this.props.disabled} onClick={ () => this.props.onClick() }>{this.props.children}</RaisedButton>)
      case 'flat': 
        return (<FlatButton disabled={this.props.disabled} onClick={ () => this.props.onClick() }>{this.props.children}</FlatButton>)
      case 'outlined':
        return (<OutlinedButton disabled={this.props.disabled} onClick={ () => this.props.onClick() }>{this.props.children}</OutlinedButton>)
      case 'text':
      default: 
        return (<TextButton disabled={this.props.disabled} onClick={ () => this.props.onClick() }>{this.props.children}</TextButton>)
    }
  }
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The onClick function of the button.
   */
  onClick: PropTypes.node.onClick,
    /**
   * The variant of the button to use.
   */
  variant: PropTypes.oneOf(['raised', 'flat', 'outlined', 'text']),
  /**
   * The colors of the button.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * If `true`, the button will be 100% width.
   */
  fullwidth: PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'text'
};


export default Button
