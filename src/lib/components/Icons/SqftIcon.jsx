import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors/colors'

const SqftIcon = (props) => {
  const {
    color, size, style, className,
  } = props

  return (
    <svg
      id='sqft-icon'
      width={ size }
      height={ size }
      style={ style }
      className={ className }
      viewBox='0 0 18 18'
      aria-labelledby='title'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd'>
        <title id='title'>Sqft</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill={ color } fillRule='nonzero' stroke={ color } strokeWidth='.3' d='M2,2 L2,16 L11.9577465,16 L11.9577465,9.43209877 L16,9.43209877 L16,6.12345679 L16,2 L7.37323944,2 L2,2 Z M2.83802817,15.1851852 L2.83802817,9.43209877 L7.34859155,9.43209877 L7.76760563,9.43209877 L11.1197183,9.43209877 L11.1197183,15.1851852 L2.83802817,15.1851852 Z M11.1197183,8.59259259 L8.16197183,8.59259259 L8.16197183,6.12345679 L15.1619718,6.12345679 L15.1619718,8.59259259 L11.1197183,8.59259259 Z M15.1619718,2.83950617 L15.1619718,5.30864198 L8.18661972,5.30864198 L8.18661972,2.83950617 L15.1619718,2.83950617 Z M7.34859155,6.12345679 L7.34859155,8.59259259 L2.83802817,8.59259259 L2.83802817,2.83950617 L7.34859155,2.83950617 L7.34859155,6.12345679 Z' />
      </g>
    </svg>
  )
}

SqftIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

SqftIcon.defaultProps = {
  color: colors.white,
  size: '18px',
  style: {},
  className: '',
}

export default SqftIcon
