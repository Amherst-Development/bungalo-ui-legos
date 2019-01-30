import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors/colors.scss'

const ArrowLeftIcon = (props) => {
  const {
    color, size, style, className,
  } = props

  return (
    <svg
      id='arrow-left-icon'
      width={ size }
      height={ size }
      style={ style }
      className={ className }
      viewBox='0 0 18 18'
      aria-labelledby='title'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='title'>ArrowLeft</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <polygon fill={ color } stroke={ color } strokeWidth='.3' points='5.85 2 5 2.832 11.413 9.11 5 15.168 5.85 16 13 9.11' transform='matrix(-1 0 0 1 18 0)' />
      </g>
    </svg>
  )
}

ArrowLeftIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

ArrowLeftIcon.defaultProps = {
  color: colors.white,
  size: '18px',
  style: {},
  className: '',
}

export default ArrowLeftIcon
