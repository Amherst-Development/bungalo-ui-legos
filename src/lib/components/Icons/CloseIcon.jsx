import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = (props) => {
  const {
    size, style, className,
  } = props

  return (
    <svg
      width={ size }
      height={ size }
      style={ style }
      className={ className }
      viewBox='0 0 18 18'
      aria-labelledby='close-icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='close-icon'>Close</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <polygon fill='currentColor' stroke='currentColor' strokeWidth='.5' points='9.931 9.014 14.847 4.001 14.019 3.188 9.111 8.193 4.001 3.18 3.188 4.009 8.29 9.014 3.188 14.019 4.001 14.847 9.111 9.834 14.019 14.84 14.847 14.027' />
      </g>
    </svg>
  )
}

CloseIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

CloseIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default CloseIcon
