import React from 'react'
import styled from 'styled-components'
import Detail from './Detail.jsx'

const Container = styled.div`
  height: 75px;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  color: #333333;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
`
const Label = styled.div`
  display: block;
  padding: 0;
  padding: 0 0 5.4px 0;
  color: #333333;
  font-weight: 500;
`
const Summary = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default function Section (props) {
  return (
    <Container>
      <Label> {props.label} </Label>
      <Summary>
        <Detail detail={props.detail}/>
      </Summary>
    </Container>
  )
}