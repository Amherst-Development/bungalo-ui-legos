/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* label-has-for is depricated, and the has-associated-control is not working */
import React from 'react'
import PropTypes from 'prop-types'
import './ToggleSwitch.css'

const ToggleSwitch = (props) => {
  const {
    switchId,
    className,
    checked,
    size,
    disabled,
    onChange,
    defaultChecked,
    animationSpeed,
    dataCy,
  } = props

  return (
    <div className='toggle-switch-container'>
      <input
        role='switch'
        type='checkbox'
        checked={ checked }
        defaultChecked={ defaultChecked }
        aria-checked='false'
        id={ switchId }
        disabled={ disabled }
        onChange={ onChange }
        className='toggle-switch-checkbox'
        data-cy={ dataCy }
      />
      <label htmlFor={ switchId } className={ `toggle-switch-label toggle-switch-${ size } switch-animation-${ animationSpeed } ${ className }` } />
    </div>
  )
}

ToggleSwitch.propTypes = {
  switchId: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  animationSpeed: PropTypes.oneOf(['default', 'off', 'slow', 'normal', 'fast']),
  size: PropTypes.oneOf(['default', 'sm', 'md', 'lg', 'xl']),
  dataCy: PropTypes.string,
}

ToggleSwitch.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  onChange: () => {},
  className: '',
  disabled: false,
  animationSpeed: 'default',
  size: 'default',
  dataCy: undefined,
}

export default ToggleSwitch
