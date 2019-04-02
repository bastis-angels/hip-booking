import React from 'react'
import styled from 'styled-components'

const Square = styled.td`
  font-size: 1.2em;
  font-weight: 300;
  color: #333333;
  background-color: #fff;
  border: 1px solid #ebebeb;
  width: auto;
  height: 36px;
  border-radius: 0;
  text-align: center;
  text-shadow: none !important;
  padding: 5px;
`

export default function Day (props) {
  return (
    <Square>props.day</Square>
  )
}