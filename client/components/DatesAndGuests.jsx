import React from 'react'
import styled from 'styled-components'

const DatesAndGuestsContainer = styled.div`
  font-size: 1.8rem;
  border: 1px solid #ebebeb;
  border-bottom: 0;
  border-top: 0;
  padding: 0 10px 0 10px;
`
const Row = styled.div`
  margin-left: 0;
  margin-right: 0;
  display: flex;
`
const Column = styled.div`
  width: 36%;
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #333333;
  float: left;
`
const Label = styled.div`
  display: block;
  line-height: 1;
  font-size: 20px;
  color: #333333;
  font-weight: 500;
  text-align: left;
  border-radius: 0;
  padding: .2em .6em .3em 0;
`
const Value = styled.span`
  font-size: 18px;
  white-space: nowrap;
`

export default function DatesAndGuests (props) {
  return (
    <DatesAndGuestsContainer>
      <Row>
        <Column detail={{left: 'Mon, Apr 1', right: ''}}>
          <Label>Check In</Label>
          <Value>Select date</Value>
        </Column>
        <Column detail={{left: 'Mon, Apr 1', right: ''}}>
          <Label>Check Out</Label>
          <Value>Select date</Value>
        </Column>
        <Column detail={{left: 'Mon, Apr 1', right: ''}}>
          <Label>Guests</Label>
          <Value> - 2 + </Value>
        </Column>
      </Row>
    </DatesAndGuestsContainer>
  )
}