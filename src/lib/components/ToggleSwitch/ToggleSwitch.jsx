/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* label-has-for is depricated, and the has-associated-control is not working */
import React from 'react'
import PropTypes from 'prop-types'
import './ToggleSwitch.css'

const ToggleSwitch = (props) => {
  const {
    switchId, optionOff, optionOn, className, size,
  } = props

  return (
    <div className='toggle-switch-container'>
      <span className='option option-off'>
        { optionOff }
      </span>
      <input role='switch' type='checkbox' aria-checked='false' id={ switchId } />
      <label htmlFor={ switchId } className={ `toggle-switch-${ size } ${ className }` } />
      <span className='option option-on'>
        { optionOn }
      </span>
    </div>
  )
}

ToggleSwitch.propTypes = {
  switchId: PropTypes.string.isRequired,
  optionOff: PropTypes.string,
  optionOn: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
}

ToggleSwitch.defaultProps = {
  optionOff: '',
  optionOn: '',
  className: '',
  size: 'default',
}

export default ToggleSwitch
