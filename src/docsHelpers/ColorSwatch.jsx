import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../lib/styles/colors/colors'


export default class ColorSwatch extends Component {
  render() {
    const { name } = this.props
    const Swatch = styled.div`
        height: 80px;
        width: 200px;
        padding: 16px;
        margin: 8px;
        border: 1px solid black;
      `
    const colorValues = [
      '900',
      '800',
      '700',
      '600',
      '500',
      '400',
      '300',
      '200',
      '100',
    ]
    return (
      <div>
        {name}
        { colorValues.map((value) => {
          const colorName = name + value
          return (
            <Swatch style={ { backgroundColor: colors[colorName] } }>
              { colorName }
              :
              { colors[colorName] }
            </Swatch>
          )
        })
        }
      </div>
    )
  }
}

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
}
