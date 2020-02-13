import React from 'react'
import PropTypes from 'prop-types'
import './ToggleSwitch.css'

const ToggleSwitch = (props) => {
  const { switchId, option1, option2, className } = props

  return (
    <>
      <span>
        { option1 }
      </span>
      <input role='switch' type='checkbox' aria-checked='false' id={ switchId } />
      <label className={ `toggle-switch ${ className }` } for={ switchId } /> 
      <span>
        { option2 }
      </span>
    </>
  )
}

ToggleSwitch.propTypes = {
  switchId: PropTypes.string.isRequired,
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
