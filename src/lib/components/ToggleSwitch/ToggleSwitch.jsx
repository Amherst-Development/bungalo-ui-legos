import React from 'react'
import PropTypes from 'prop-types'
import './ToggleSwitch.css'

const ToggleSwitch = (props) => {
  const { option1, option2, className } = props

  return (
    <>
      <span>
        { option1 }
      </span>
      <input role='switch' type='checkbox' aria-checked='false' id='switch2' />
      <label className={ `toggle-switch ${ className }` } for='switch2' /> 
      <span>
        { option2 }
      </span>
    </>
  )
}

ToggleSwitch.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  className: PropTypes.string,
}

ToggleSwitch.defaultProps = {
  option1: '',
  option2: '',
  className: '',
}

export default ToggleSwitch
