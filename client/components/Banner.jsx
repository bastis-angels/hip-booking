import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  min-height: 74px;
  background-color: #fff;
  color: #757575;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
`
const Wrapper = styled.div`
  padding: 13px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Boarder = styled.div`
  box-sizing: boarder-box;
`
const Price = styled.h5`
  margin: 2px 0 0;
  line-height: 0.9;
  font-size: 2.6rem;
  color: #333333;
  text-size-adjust: 100%
;
`

export default function Banner(props) {
  return (
    <Outer>
      <Wrapper>
        <Boarder>
          <Price>$20</Price>
          per night
        </Boarder>
      </Wrapper>
    </Outer>
    )
}