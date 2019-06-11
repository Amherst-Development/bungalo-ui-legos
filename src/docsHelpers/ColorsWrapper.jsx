import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class ColorsWrapper extends Component {
  render() {
    const { children } = this.props
    const Colors = styled.div`
        display: flex;
        flex-direction: row;
      `
    return (
      <Colors>
        { children }
      </Colors>
    )
  }
}

ColorsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
