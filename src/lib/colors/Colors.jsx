import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class Colors extends Component {
  render() {
    const Color = styled.div`
        background-color: ${ props => props.value };
        height: 30px;
        width: 180px;
        padding: 4px 16px;
    `
    const { colors } = this.props
    const colorList = Object.keys(colors).map((key) => {
      return (
        <Color key={ key } value={ colors[key] }>
          {key}
          :
          {colors[key]}
        </Color>
      )
    })

    return (
      <div>
        {colorList}
      </div>
    )
  }
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default Colors
