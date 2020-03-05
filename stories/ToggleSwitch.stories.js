import React, { useState } from 'react'
import { addParameters } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { ToggleSwitch } from '../src/lib'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})


export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
}

export const AllSizes = () => (
  <div style={ {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '160px',
  } }
  >
    <ToggleSwitch switchId='switch-sm' size='sm' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-md' size='md' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-lg' size='lg' style={ { padding: '32px' } } onChange={ action('onChange') } defaultChecked />
    <ToggleSwitch switchId='switch-xl' size='xl' style={ { padding: '32px' } } onChange={ action('onChange') } />
  </div>
)

export const SmallSwitch = () => <ToggleSwitch switchId='solo-switch-sm' size='sm' onChange={ action('onChange') } />

export const MediumSwitch = () => <ToggleSwitch switchId='solo-switch-md' size='md' onChange={ action('onChange') } />

export const LargeSwitch = () => <ToggleSwitch switchId='solo-switch-lg' size='lg' onChange={ action('onChange') } />

export const ExtraLargeSwitch = () => <ToggleSwitch switchId='solo-switch-xl' size='xl' onChange={ action('onChange') } />

export const SwitchSpeeds = () => (
  <div style={ {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '160px',
  } }
  >
    <ToggleSwitch switchId='switch-default' size='lg' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-off' size='lg' animationSpeed='off' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-slow' size='lg' animationSpeed='slow' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-normal' size='lg' animationSpeed='normal' style={ { padding: '32px' } } onChange={ action('onChange') } />
    <ToggleSwitch switchId='switch-fast' size='lg' animationSpeed='fast' style={ { padding: '32px' } } onChange={ action('onChange') } />
  </div>
)

const TestControlledSwitch = () => {
  const [isChecked, setIsChecked] = useState(true)

  const change = () => {
    action('onChange')
    setIsChecked(!isChecked)
  }
  return (
    <div style={ {
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '160px',
    } }
    >
      <button type='button' onClick={ change }>Toggle Switches</button>
      <ToggleSwitch switchId='controlled-switch-1' size='lg' checked={ !isChecked } onChange={ change } />
      <ToggleSwitch switchId='controlled-switch-2' size='lg' checked={ isChecked } onChange={ change } />
    </div>
  )
}

export const ControlledSwitch = () => <TestControlledSwitch />

export const DisabledSwitch = () => <ToggleSwitch switchId='disabled-switch' size='lg' disabled onChange={ action('onChange') } />
export const DisabledSwitchOn = () => <ToggleSwitch switchId='disabled-switch' size='lg' disabled onChange={ action('onChange') } defaultChecked />

export const UnstyledSwitch = () => (
  <div>
    <input type='checkbox' id='test1' />
    <label htmlFor='test1'>TEST LABEL</label>
  </div>
)
