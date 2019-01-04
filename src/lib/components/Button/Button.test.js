import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from './Button'

describe('<Button />', () => {
  const fakeClick = () => {}
  it('renders a raised button', () => {
    const raisedButton = renderer.create(<Button variant='raised' onClick={ fakeClick }>Test</Button>).toJSON()
    expect(raisedButton).toHaveStyleRule('box-shadow', expect.any(String))
    expect(raisedButton).not.toHaveStyleRule('border')
  })
})
