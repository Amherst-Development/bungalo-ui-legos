import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors/colors'
import '../../styles/fonts/fonts.scss'

export class Button extends Component {
  clicky = (e) => {
    const { onClick } = this.props
    onClick()
    e.stopPropagation()
  }

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
        case 'tertiary':
          return {
            main: colors.tangerine,
            accent: colors.white,
            hover: colors.orange,
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
        case 'extra-large':
          return {
            padding: '16px 24px',
            height: '55px',
            fontSize: '16px',
            lineHeight: '16px',
          }
        case 'large':
          return {
            padding: '14px 24px',
            height: '50px',
            fontSize: '15px',
            lineHeight: '15px',
          }
        case 'small':
          return {
            padding: '8px 16px',
            height: '35px',
            fontSize: '13px',
            lineHeight: '13px',
          }
        case 'medium':
        default:
          return {
            padding: '14px 24px',
            height: '45px',
            lineHeight: '14px',
            fontSize: '14px',
          }
      }
    }

    const {
      size,
      fullwidth,
      disabled,
      color,
      variant,
      className,
      children,
    } = this.props
  
    const DefaultButton = styled.button`
      font-family: 'Graphik-Medium';
      font-size: ${ getSize(size).fontSize };
      line-height: ${ getSize(size).lineHeight };
      white-space: nowrap;
      font-weight: normal;
      letter-spacing: -0.2px;
      width: ${ fullwidth ? '100%' : '' };
      margin: 0;
      padding: ${ getSize(size).padding };
      min-width: 64px;
      min-height: ${ getSize(size).height };
      border-radius: 0;
      border: none;
      cursor: pointer;
      opacity: ${ disabled && '.65' };
      cursor: ${ disabled && 'not-allowed' };
      transition: all 0.2s ease;
    `
    const RaisedButton = styled(DefaultButton)`
      background: ${ getColor(color).main };
      color: ${ getColor(color).accent };
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
      border-radius: 1px;
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
          <RaisedButton disabled={ disabled } onClick={ this.clicky } className={ className }>
            {children}
          </RaisedButton>
        )
      case 'flat':
        return (
          <FlatButton disabled={ disabled } onClick={ this.clicky } className={ className }>
            {children}
          </FlatButton>
        )
      case 'outlined':
        return (
          <OutlinedButton disabled={ disabled } onClick={ this.clicky } className={ className }>
            {children}
          </OutlinedButton>
        )
      case 'text':
      default:
        return (
          <TextButton disabled={ disabled } onClick={ this.clicky } className={ className }>
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
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary']),
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
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
