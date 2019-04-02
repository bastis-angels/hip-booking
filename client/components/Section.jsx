import React from 'react'
import styled from 'styled-components'
import Detail from './Detail.jsx'

const Outer = styled.span`
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(235, 235, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(235, 235, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(51, 51, 51);
  border-top-style: none;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 5px 0px;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: block;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  height: 94.3906px;
  line-height: 22.72px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  text-size-adjust: 100%;
  width: 319px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`
const Label = styled.div`
  line-height: 1;
`
const Summary = styled.ul`
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  list-style: none;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`

export default function Subtotal (props) {
  return (
    <Outer>
      <Label> {props.label} </Label>
      <Summary>
        <Detail />
      </Summary>
    </Outer>
  )
}