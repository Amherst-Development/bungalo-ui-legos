import React from 'react'
import PropTypes from 'prop-types'

const BellIcon = (props) => {
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
        <title>Bell</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill='currentColor' d='M15.0530969,12.8014147 C14.9137013,12.6807285 13.7815373,11.5977287 13.7815373,8.18040372 C13.7549511,7.0121445 13.2932835,5.8890739 12.4759788,5.00445114 C12.0373354,4.51462455 11.4942882,4.11550773 10.8814294,3.83252464 C10.8841889,3.80399918 10.8841889,3.77529938 10.8814294,3.74677392 C10.8814294,2.78205732 10.0442285,2 9.01148883,2 C7.97874915,2 7.14154823,2.78205732 7.14154823,3.74677392 C7.13878871,3.77529938 7.13878871,3.80399918 7.14154823,3.83252464 C6.52868948,4.11550773 5.98564223,4.51462455 5.54699888,5.00445114 C4.72969411,5.8890739 4.26802651,7.0121445 4.24144035,8.18040372 C4.24144035,11.5913768 3.11267621,12.6712007 2.97328064,12.7918869 C2.59077177,13.0056373 2.41281976,13.434958 2.54149435,13.8335993 C2.67725302,14.2512056 3.09438057,14.5330544 3.56146195,14.522781 L6.88655633,14.522781 C6.69918216,14.7057429 6.69918216,14.9940654 6.88655633,15.1770273 C7.43504227,15.703206 8.18788312,16 8.97409001,16 C9.76029691,16 10.5131378,15.703206 11.0616237,15.1770273 C11.2363413,14.9967491 11.2363413,14.7221149 11.0616237,14.5418367 L14.4309167,14.5418367 C14.8979981,14.5521101 15.3151256,14.2702613 15.4508843,13.852655 C15.5899326,13.45851 15.4264155,13.0263802 15.0530969,12.8014147 L15.0530969,12.8014147 Z M9.0216885,2.94008196 C9.37761317,2.96843595 9.68572732,3.18245573 9.81726323,3.49269771 C9.29250664,3.39063772 8.75087036,3.39063772 8.22611377,3.49269771 C8.35764969,3.18245573 8.66576383,2.96843595 9.0216885,2.94008196 L9.0216885,2.94008196 Z M9.0216885,4.36926063 C11.17722,4.36926063 12.7615697,6.40187028 12.7615697,8.18040372 C12.7424553,9.2508651 12.8762299,10.318928 13.1593571,11.3563563 L4.88401994,11.3563563 C5.16714708,10.318928 5.30092173,9.2508651 5.2818073,8.18040372 C5.2818073,6.40187028 6.86615697,4.36926063 9.0216885,4.36926063 Z M8.99788926,15.0531651 C8.4871928,15.0582827 7.99624236,14.8691047 7.63793246,14.5291329 L10.3238471,14.5291329 C9.97401599,14.8615302 9.49687782,15.0501002 8.99788926,15.0531651 L8.99788926,15.0531651 Z M3.5818613,13.5795231 C4.00713095,13.2377739 4.33238006,12.8006141 4.52703128,12.3091421 L13.5197456,12.3091421 C13.7143968,12.8006141 14.0396459,13.2377739 14.4649156,13.5795231 L3.5818613,13.5795231 Z' />
      </g>
    </svg>
  )
}

BellIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

BellIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default BellIcon
