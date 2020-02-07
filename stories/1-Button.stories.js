import React from 'react'
import { action } from '@storybook/addon-actions'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { Button } from '../src/lib'
import { MarginWrapper } from '../src/docsHelpers'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => (
  <MarginWrapper>
    <Button variant='text' color='default' onClick={ action('clicked') }>Default</Button>
    <Button variant='text' color='primary' onClick={ action('clicked') }>Primary</Button>
    <Button variant='text' color='secondary' onClick={ action('clicked') }>Secondary</Button>
    <Button variant='text' color='tertiary' onClick={ action('clicked') }>Tertiary</Button>
    <Button variant='text' color='primary' disabled onClick={ action('clicked') }>Disabled</Button>
  </MarginWrapper>
)

export const Raised = () => (
  <MarginWrapper>
    <Button variant='raised' color='default' onClick={ action('clicked') }>Default</Button>
    <Button variant='raised' color='primary' onClick={ action('clicked') }>Primary</Button>
    <Button variant='raised' color='secondary' onClick={ action('clicked') }>Secondary</Button>
    <Button variant='raised' color='tertiary' onClick={ action('clicked') }>Tertiary</Button>
    <Button variant='raised' color='primary' disabled onClick={ action('clicked') }>Disabled</Button>
  </MarginWrapper>
)

export const Flat = () => (
  <MarginWrapper>
    <Button variant='flat' color='default' onClick={ action('clicked') }>Default</Button>
    <Button variant='flat' color='primary' onClick={ action('clicked') }>Primary</Button>
    <Button variant='flat' color='secondary' onClick={ action('clicked') }>Secondary</Button>
    <Button variant='flat' color='tertiary' onClick={ action('clicked') }>Tertiary</Button>
    <Button variant='flat' color='primary' disabled onClick={ action('clicked') }>Disabled</Button>
  </MarginWrapper>
)

export const Outlined = () => (
  <MarginWrapper>
    <Button variant='outlined' color='default' onClick={ action('clicked') }>Default</Button>
    <Button variant='outlined' color='primary' onClick={ action('clicked') }>Primary</Button>
    <Button variant='outlined' color='secondary' onClick={ action('clicked') }>Secondary</Button>
    <Button variant='outlined' color='tertiary' onClick={ action('clicked') }>Tertiary</Button>
    <Button variant='outlined' color='primary' disabled onClick={ action('clicked') }>Disabled</Button>
  </MarginWrapper>
)

export const Sizes = () => (
  <MarginWrapper>
    <Button variant='flat' color='primary' size='small' onClick={ action('clicked') }>Small</Button>
    <Button variant='flat' color='primary' size='medium' onClick={ action('clicked') }>Default</Button>
    <Button variant='flat' color='primary' size='large' onClick={ action('clicked') }>Large</Button>
    <Button variant='flat' color='primary' size='extra-large' onClick={ action('clicked') }>Extra Large</Button>
    <br />
    <Button variant='flat' color='primary' fullwidth onClick={ action('clicked') }>Full Width</Button>
  </MarginWrapper>
)
