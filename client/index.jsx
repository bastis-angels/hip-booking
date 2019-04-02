import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Banner from './components/Banner.jsx'
import DatesAndGuests from './components/DatesAndGuests.jsx'
import Month from './components/Month.jsx'
import Section from './components/Section.jsx'
import Submit from './components/Submit.jsx'

const Container = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: block;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 238.781px;
  line-height: 22.72px;
  position: relative;
  text-size-adjust: 100%;
  width: 319px;
  z-index: 99;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`



function App(props) {
  return (
    <Container>
      <Banner />
      <DatesAndGuests />
      <Month />
      <Section label='Pricing' />
      <Section label='Subtotal' />
      <Submit />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));