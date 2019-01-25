import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../colors/colors.scss'

export class Button extends Component {
  render() {
    const getColor = (color) => {
      switch (color) {
        case 'primary':
          return {
            main: colors.blue,
            accent: colors.white,
            hover: colors.blueberry,
            hoverText: colors.white,
          }
        case 'secondary':
          return {
            main: colors.grey,
            accent: colors.white,
            hover: colors.black,
            hoverText: colors.white,
          }
        case 'default':
        default:
          return {
            main: colors.black,
            accent: colors.greyTint,
            hover: colors.grey,
            hoverText: colors.greyLight,
          }
      }
    }

    const getSize = (size) => {
      switch (size) {
        case 'large':
          return {
            padding: '8px 32px',
            height: '60px',
            fontSize: '1.1rem',
          }
        case 'small':
          return {
            padding: '4px 8px',
            height: '31px',
            fontSize: '0.8rem',
          }
        case 'medium':
        default:
          return {
            padding: '6px 16px',
            height: '36px',
            fontSize: '1rem',
          }
      }
    }

    const {
      size,
      fullwidth,
      disabled,
      color,
      variant,
      onClick,
      className,
      children,
    } = this.props

    const DefaultButton = styled.button`
      font-size: ${ getSize(size).fontSize };
      white-space: nowrap;
      width: ${ fullwidth ? '100%' : '' };
      padding: ${ getSize(size).padding };
      min-width: 64px;
      min-height: ${ getSize(size).height };
      border-radius: 0;
      border: none;
      cursor: pointer;
      opacity: ${ disabled && '.65' };
      cursor: ${ disabled && 'not-allowed' };
      transition: all 0.3s ease;
    `
    const RaisedButton = styled(DefaultButton)`
      background: ${ getColor(color).main };
      color: ${ getColor(color).accent };
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
      &:hover {
        background: ${ getColor(color).hover };
        &:disabled {
          background: ${ getColor(color).main };
          color: ${ getColor(color).accent };
        }
      }
    `
    const FlatButton = styled(DefaultButton)`
      background: ${ getColor(color).main };
      color: ${ getColor(color).accent };
      &:hover {
        background: ${ getColor(color).hover };
        &:disabled {
          background: ${ getColor(color).main };
          color: ${ getColor(color).accent };
        }
      }
    `

    const OutlinedButton = styled(DefaultButton)`
      background: transparent;
      color: ${ getColor(color).main };
      border: 1px solid ${ getColor(color).main };
      &:hover {
        color: ${ getColor(color).hoverText };
        background: ${ getColor(color).main };
        &:disabled {
          color: ${ getColor(color).main };
          background: transparent;
        }
      }
    `

    const TextButton = styled(DefaultButton)`
      background: transparent;
      color: ${ getColor(color).main };
      &:hover {
        color: ${ getColor(color).hoverText };
        background: ${ getColor(color).main };
        &:disabled {
          color: ${ getColor(color).main };
          background: transparent;
        }
      }
    `

    switch (variant) {
      case 'raised':
        return (
          <RaisedButton disabled={ disabled } onClick={ () => onClick() } className={ className }>
            {children}
          </RaisedButton>
        )
      case 'flat':
        return (
          <FlatButton disabled={ disabled } onClick={ () => onClick() } className={ className }>
            {children}
          </FlatButton>
        )
      case 'outlined':
        return (
          <OutlinedButton disabled={ disabled } onClick={ () => onClick() } className={ className }>
            {children}
          </OutlinedButton>
        )
      case 'text':
      default:
        return (
          <TextButton disabled={ disabled } onClick={ () => onClick() } className={ className }>
            {children}
          </TextButton>
        )
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
  onClick: PropTypes.func,
  /**
   * The onClick function of the button.
   */
  className: PropTypes.string,
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
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  /**
   * If `true`, the button will be 100% width.
   */
  fullwidth: PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'text',
  size: 'default',
  fullwidth: false,
  onClick: () => {},
  className: '',
}


export default Button
