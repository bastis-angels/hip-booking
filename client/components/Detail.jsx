import React from 'react'
import styled from 'styled-components'

const List = styled.li`
  margin-bottom: 0;
  color: #333333;
  line-height: 1.4;
`
const Left = styled.span`
  width: 73%;
  padding: 0;
  float: left !important;
`
const Right = styled.span`
  float: right !important; 
`

export default function Detail (props) {
  return (
    <List>
      <Left title="" data-toggle="tooltip" data-placement="bottom" 
      data-original-title="This is the nightly base price with applicable weeknight discounts, additional people, or cleaning fees applied. This is the subtotal before any applicable occupancy taxes or service fees.">
      $60.00 × 1 night
        <span className="icon fa fa-question-circle"></span> 
      </ Left>
      <Right> $60 </Right>
    </List>
  )
}
