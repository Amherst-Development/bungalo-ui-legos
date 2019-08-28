import React from 'react'
import PropTypes from 'prop-types'

const QuestionIcon = (props) => {
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
        <title id='title'>Question</title>
        <polygon points='0 0 18 0 18 18 0 18' />
        <path fill='currentColor' fillRule='nonzero' d='M9.75,14.5 L8.25,14.5 L8.25,13 L9.75,13 L9.75,14.5 Z M11.3025,8.6875 L10.6275,9.3775 C10.0875,9.925 9.75,10.375 9.75,11.5 L8.25,11.5 L8.25,11.125 C8.25,10.3 8.5875,9.55 9.1275,9.0025 L10.0575,8.0575 C10.335,7.7875 10.5,7.4125 10.5,7 C10.5,6.175 9.825,5.5 9,5.5 C8.175,5.5 7.5,6.175 7.5,7 L6,7 C6,5.3425 7.3425,4 9,4 C10.6575,4 12,5.3425 12,7 C12,7.66 11.73,8.26 11.3025,8.6875 Z' />
      </g>
    </svg>
  )
}

QuestionIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

QuestionIcon.defaultProps = {
  size: '18px',
  style: {},
  className: '',
}

export default QuestionIcon
