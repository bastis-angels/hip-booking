import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
  height: 74px;
  background-color: #fff;
  color: #757575;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px #ebebeb;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 10px;
  align-items: center;
`

const Price = styled.h5`
  margin: 2px 0 0;
  line-height: 0.9;
  font-size: 2.6rem;
  color: #333333;
  font-weight: 700;
`

export default function Banner(props) {
  return (
    <BannerContainer>
      <Wrapper>
        <div>
          <Price>$20</Price>
          per night
        </div>
      </Wrapper>
    </BannerContainer>
    )
}