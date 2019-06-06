import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../lib/styles/colors/colors'


export default class ColorSwatch extends Component {
  render() {
    const { name } = this.props
    const Swatch = styled.div`
        background-color: ${ colors[name] };
        height: 80px;
        width: 200px;
        padding: 16px;
        margin: 8px;
        border: 1px solid black;
      `
    return (
      <Swatch>
        { name }
         :
        { colors[name] }
      </Swatch>
    )
  }
}

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
}
