import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from './Button'

describe('<Button />', () => {
  it('renders a default button with no variant passed', () => {
    const textButton = renderer.create(<Button>Test</Button>).toJSON()
    expect(textButton).toHaveStyleRule('background', 'transparent')
    expect(textButton).not.toHaveStyleRule('box-shadow')
    expect(textButton).not.toHaveStyleRule('border')
  })
  it('renders a raised button', () => {
    const raisedButton = renderer.create(<Button variant='raised'>Test</Button>).toJSON()
    expect(raisedButton).toHaveStyleRule('box-shadow', expect.any(String))
    expect(raisedButton).not.toHaveStyleRule('border')
  })
  it('renders a flat button', () => {
    const flatButton = renderer.create(<Button variant='flat'>Test</Button>).toJSON()
    expect(flatButton).not.toHaveStyleRule('background', 'transparent')
    expect(flatButton).not.toHaveStyleRule('box-shadow')
    expect(flatButton).not.toHaveStyleRule('border')
  })
  it('renders a raised button', () => {
    const outlinedButton = renderer.create(<Button variant='outlined'>Test</Button>).toJSON()
    expect(outlinedButton).not.toHaveStyleRule('box-shadow')
    expect(outlinedButton).toHaveStyleRule('border', expect.any(String))
  })
  it('renders a fullwidth button', () => {
    const fullWidthButton = renderer.create(<Button fullwidth>Test</Button>).toJSON()
    expect(fullWidthButton).toHaveStyleRule('width', '100%')
  })
  it('should disable the button correctly', () => {
    const disabledButton = renderer.create(<Button disabled>Test</Button>).toJSON()
    expect(disabledButton).toHaveStyleRule('opacity', '.65')
    expect(disabledButton).toHaveStyleRule('cursor', 'not-allowed')
  })
})
