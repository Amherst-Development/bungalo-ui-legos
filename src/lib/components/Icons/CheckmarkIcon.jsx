import React from 'react'
import PropTypes from 'prop-types'

const CheckmarkIcon = (props) => {
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
      aria-labelledby='title'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='title'>Checkmark</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill='currentColor' d='M13.7730102,5 L7.58267278,11.2914004 L4.87841467,8.52666685 L4,9.41942246 L7.14346544,12.6305339 C7.38612132,12.8768446 7.77922424,12.8768446 8.02188012,12.6305339 L14.6514248,5.89275562 L13.7730102,5 Z' />
      </g>
    </svg>
  )
}

CheckmarkIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

CheckmarkIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default CheckmarkIcon
