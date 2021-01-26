import React from 'react'
import PropTypes from 'prop-types'

const ArrowDownIcon = (props) => {
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
      aria-labelledby='arrow-down-icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='arrow-down-icon'>Arrow Down</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <polygon fill='currentColor' stroke='currentColor' strokeWidth='1' points='6.85 2 6 2.832 12.413 9.11 6 15.168 6.85 16 14 9.11' transform='rotate(90 9 9)' />
      </g>
    </svg>
  )
}

ArrowDownIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

ArrowDownIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default ArrowDownIcon
