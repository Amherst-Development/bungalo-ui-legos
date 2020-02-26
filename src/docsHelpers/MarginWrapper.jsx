import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function MarginWrapper(props) {
  const AddMargins = styled.div`
    padding: 24px;
    box-sizing: border-box;
    * {
        margin: 8px !important;
    }
  `

  const { children } = props
  return (
    <AddMargins>{ children }</AddMargins>
  )
}

MarginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarginWrapper
