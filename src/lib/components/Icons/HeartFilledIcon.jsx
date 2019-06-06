import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors/colors'

const HeartFilledIcon = (props) => {
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
      <g fill='none'>
        <title>Heart Filled</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill={ color } d='M12.2756598,2.0012364 C13.8902521,1.96793584 15.405318,2.78903825 16.2736781,4.16799525 C17.1420383,5.54695224 17.2382097,7.28449676 16.5274593,8.75309925 C15.8400426,10.1565143 11.1517881,14.4404294 9.72967209,15.7186053 C9.31547531,16.0937982 8.68901875,16.0937982 8.27482197,15.7186053 C6.8563431,14.4404294 2.17536284,10.1565143 1.48067191,8.76046626 C0.762227361,7.29213462 0.854132812,5.55024538 1.72298923,4.16781228 C2.59184565,2.78537918 4.11117159,1.96364621 5.72883426,2.0012364 C6.59083296,2.0012364 7.59467954,2.5500785 9.00224703,3.80983687 C10.4098145,2.5500785 11.4136611,2.0012364 12.2756598,2.0012364 Z' />
      </g>
    </svg>
  )
}

HeartFilledIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

HeartFilledIcon.defaultProps = {
  color: colors.grey900,
  size: '18px',
  style: {},
  className: '',
}

export default HeartFilledIcon
