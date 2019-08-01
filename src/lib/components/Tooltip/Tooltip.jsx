import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors/colors'
import '../../styles/fonts/fonts.scss'

export const TOOLTIP_DIRECTIONS = {
  RIGHT: 'tooltip-right',
  LEFT: 'tooltip-left',
  TOP: 'tooltip-top',
  BOTTOM: 'tooltip-bottom',
}

const arrowSize = 10

const TooltipMessage = styled.div`
  position: absolute;
  background: ${ colors.blackTint };
  border: 1px solid ${ colors.blackTint };
  transition: all .25s;
  display: none;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.21);
  p {
      font-family: Graphik-Regular;
      padding: 12px;
      margin: 0;
      white-space: nowrap;
      font-size: 12px;
      line-height: 1.2;
      color: ${ colors.white };
  }
  &:after {
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${ arrowSize }px;
    margin-left: -${ arrowSize }px;
  }
  &.tooltip-top {
      top: 0;
      left: 50%;
      transform: translate(-50%,-120%);
      &:after {
          top: 100%;
          left: 50%;
          border-top-color: ${ colors.blackTint };
      }
  }
  &.tooltip-bottom {
      bottom: 0;
      left: 50%;
      transform: translate(-50%,120%);
      &:after {
          top: -${ arrowSize * 2 }px;
          left: 50%;
          border-bottom-color: ${ colors.blackTint };
      }
  }
  &.tooltip-left {
      top: 50%;
      left: -${ arrowSize }px;
      transform: translate(-100%,-50%);
      &:after {
          top: 50%;
          left: 100%;
          margin-left: 0;
          margin-top: -${ arrowSize }px;
          border-left-color: ${ colors.blackTint };
      }
  }
  &.tooltip-right {
      top: 50%;
      right: -${ arrowSize }px;
      transform: translate(100%,-50%);
      &:after {
          top: 50%;
          right: 100%;
          margin-left: 0;
          margin-top: -${ arrowSize }px;
          border-right-color: ${ colors.blackTint };
      }
  }
  &.tooltip-bottom-left {
    bottom: -${ arrowSize / 2 }px;
    right: -${ arrowSize / 2 }px;
    transform: translateY(100%);
    &:after {
        top: -${ arrowSize * 2 }px;
        right: ${ arrowSize }px;
        border-bottom-color: ${ colors.blackTint };
    }
  }
  &.tooltip-bottom-right {
    bottom: -${ arrowSize / 2 }px;
    left: -${ arrowSize / 2 }px;
    transform: translateY(100%);
    &:after {
        top: -${ arrowSize * 2 }px;
        left: ${ arrowSize * 2 }px;
        border-bottom-color: ${ colors.blackTint };
    }
  }
  &.tooltip-top-left {
    top: -${ arrowSize }px;
    right: -${ arrowSize / 2 }px;
    transform: translateY(-100%);
    &:after {
        top: 100%;
        right: ${ arrowSize }px;
        border-top-color: ${ colors.blackTint };
    }
  }
  &.tooltip-top-right {
    top: -${ arrowSize / 2 }px;
    left: -${ arrowSize / 2 }px;
    transform: translateY(-100%);
    &:after {
        top: 100%;
        left: ${ arrowSize * 2 }px;
        border-top-color: ${ colors.blackTint };
    }
  }
`

const Tooltip = ((props) => {
  const {
    direction, text, className, children,
  } = props

  const [active, setActive] = useState(false)

  const handleMouseOver = () => {
    setActive(true)
  }

  const handleMouseLeave = () => {
    setActive(false)
  }

  const handleFocus = () => {
    setActive(!active)
  }

  const handleBlur = () => {
    setActive(false)
  }

  return (
    <div
      className={ `lego-tooltip ${ className } ${ active ? ' active' : '' }` }
      onMouseOver={ handleMouseOver }
      onMouseLeave={ handleMouseLeave }
      onFocus={ handleFocus }
      onBlur={ handleBlur }
    >
      <TooltipMessage className={ `tooltip-container ${ direction }` } aria-hidden={ !active }>
        <p className='tooltip-message'>{ text }</p>
      </TooltipMessage>
      {children}
    </div>
  )
})

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Tooltip.defaultProps = {
  className: '',
}

export default styled(Tooltip)`
  font-family: 'Graphik-Regular';
  cursor: pointer;
  position: absolute;

  &.active {
    .tooltip-container {
        z-index: 300;
        display: block;
    }
  }
`
