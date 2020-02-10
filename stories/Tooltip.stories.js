import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import colors from '../src/lib/styles/colors/colors.js'
import { Tooltip, InfoIcon } from '../src/lib'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const TopTooltip = () => (
  <Tooltip direction='tooltip-top' text='This is a top tooltip'>
    <InfoIcon size='36px' />
  </Tooltip>
)

export const AllTooltips = () => (
  <div style={ { margin: '32px 128px', padding: '8px', color: colors.grey700 } }>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-top' text='This is a top tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-bottom' text='This is a bottom tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-left' text='This is a left tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-right' text='This is a right tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-top-left' text='This is a top left tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-bottom-left' text='This is a bottom left tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-top-right' text='This is a top right tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
    <div style={ { height: '42px', padding: '8px' } }>
      <Tooltip direction='tooltip-bottom-right' text='This is a bottom right tooltip'>
        <InfoIcon size='36px' />
      </Tooltip>
    </div>
  </div>
)
