import React from 'react'
import { ColorSwatch } from '../src/docsHelpers'
import '../lib/styles/fonts/fonts.css'

export default {
  title: 'Colors',
}


export const AllColors = () => (
  <div style={ {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    fontFamily: 'Graphik-Regular',
    fontSize: '0.9rem',
  } }
  >
    <ColorSwatch name='blue' />
    <ColorSwatch name='orange' />
    <ColorSwatch name='creme' />
    <ColorSwatch name='green' />
    <ColorSwatch name='yellow' />
    <ColorSwatch name='brown' />
    <ColorSwatch name='darkblue' />
    <ColorSwatch name='darkorange' />
    <ColorSwatch name='grey' />
  </div>
)

AllColors.story = {
  name: 'All Colors',
}
