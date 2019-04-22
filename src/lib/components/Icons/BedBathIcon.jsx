import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors/colors'

const BedBathIcon = (props) => {
  const {
    color, size, style, className,
  } = props

  return (
    <svg
      id='bed-bath-icon'
      width={ size }
      height={ size }
      style={ style }
      className={ className }
      viewBox='0 0 18 18'
      aria-labelledby='title'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='title'>Bed Bath</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill={ color } fillRule='nonzero' stroke={ color } strokeWidth='.4' d='M15.9230769,8.05263158 L5.53846154,8.05263158 L5.53846154,6.78947368 C5.53846154,6.44021053 5.28057692,6.15789474 4.96153846,6.15789474 L2.07692308,6.15789474 L2.07692308,3 L1.5,3 L1.5,6.78947368 L1.5,8.05263158 L1.5,8.68421053 L1.5,12.4736842 L1.5,15 L2.07692308,15 L2.07692308,13.1052632 L15.9230769,13.1052632 L15.9230769,15 L16.5,15 L16.5,12.4736842 L16.5,11.8421053 L16.5,8.68421053 C16.5,8.33494737 16.2421154,8.05263158 15.9230769,8.05263158 Z M4.96153846,6.78947368 L4.96153846,8.05263158 L2.07692308,8.05263158 L2.07692308,6.78947368 L4.96153846,6.78947368 Z M15.9230769,12.4736842 L2.07692308,12.4736842 L2.07692308,11.8421053 L2.07692308,8.68421053 L4.96153846,8.68421053 L15.9230769,8.68421053 L15.9230769,12.4736842 Z' />
      </g>
    </svg>
  )
}

BedBathIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

BedBathIcon.defaultProps = {
  color: colors.white,
  size: '18px',
  style: {},
  className: '',
}

export default BedBathIcon
