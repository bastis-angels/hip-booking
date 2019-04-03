import React from 'react'
import styled from 'styled-components'

const List = styled.li`
  margin-bottom: 0;
  color: #333333;
  line-height: 1.4;
  font-size: 0.75em;
`
const Left = styled.span`
  width: 73%;
  padding: 0;
  float: left;
`
const Right = styled.span`
  float: right; 
`


// title="" data-toggle="tooltip" data-placement="bottom" 
//       data-original-title="This is the nightly base price with applicable weeknight discounts, additional people, or cleaning fees applied. This is the subtotal before any applicable occupancy taxes or service fees."

export default function Detail (props) {
  return (
    <List>
      <Left>
        {props.detail.left}
        <span className="faq-circle"></span> 
      </ Left>
      <Right> {props.detail.right} </Right>
    </List>
  )
}
