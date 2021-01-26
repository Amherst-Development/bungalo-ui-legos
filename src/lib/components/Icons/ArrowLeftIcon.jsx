import React from 'react'
import PropTypes from 'prop-types'

const ArrowLeftIcon = (props) => {
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
        <title id='arrow left icon'>Arrow Left</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <polygon fill='currentColor' stroke='currentColor' strokeWidth='1' points='5.85 2 5 2.832 11.413 9.11 5 15.168 5.85 16 13 9.11' transform='matrix(-1 0 0 1 18 0)' />
      </g>
    </svg>
  )
}

ArrowLeftIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

ArrowLeftIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default ArrowLeftIcon
