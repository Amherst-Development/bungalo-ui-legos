import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export default class IconWrapper extends Component {
  render() {
    const { name, children } = this.props
    const Wrapper = styled.div`
        padding: 16px;
        margin: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: middle;
      `
    return (
      <Wrapper>
        { children }
        <div>{ name }</div>
      </Wrapper>
    )
  }
}

IconWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
