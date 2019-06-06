import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors/colors'

const InfoIcon = (props) => {
  const {
    color, size, style, className,
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
      <g fill='none' fillRule='evenodd' transform='translate(3 3)'>
        <title id='title'>Info</title>
        <path stroke={ color } strokeWidth='1.1' d='M6,0 C2.688,0 0,2.688 0,6 C0,9.312 2.688,12 6,12 C9.312,12 12,9.312 12,6 C12,2.688 9.312,0 6,0 Z' />
        <path fill={ color } fillRule='nonzero' d='M4.884,9 L4.884,8.748 L5.451,8.595 L5.451,5.49 L4.902,5.13 L4.902,4.986 L6.594,4.527 L6.594,8.595 L7.188,8.748 L7.188,9 L4.884,9 Z M5.991,3.654 C5.64,3.654 5.334,3.357 5.334,2.997 C5.334,2.646 5.64,2.34 5.991,2.34 C6.342,2.34 6.657,2.646 6.657,2.997 C6.657,3.357 6.342,3.654 5.991,3.654 Z' />
      </g>
    </svg>
  )
}

InfoIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

InfoIcon.defaultProps = {
  color: colors.grey900,
  size: '18px',
  style: {},
  className: '',
}

export default InfoIcon
