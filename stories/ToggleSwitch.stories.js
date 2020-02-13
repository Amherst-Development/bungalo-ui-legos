import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import colors from '../src/lib/styles/colors/colors.js'
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


export const SwitchWithNoProps = () => (
  <div style={ { margin: '16px 32px 64px', padding: '32px', color: colors.grey700 } }>
    <ToggleSwitch />
  </div>
)
