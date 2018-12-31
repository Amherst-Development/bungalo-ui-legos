import React from 'react'
import styled from 'styled-components'

function MarginWrapper(props) {
    const AddMargins = styled.div`
        * {
            margin: 8px;
        }
    `;
  return (
    <AddMargins>{props.children}</AddMargins>      
  )
}

export default MarginWrapper
