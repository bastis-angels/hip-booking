import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  border-top: 0;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  background-color: white;
  border: 1px solid #ebebeb;
  padding: 10px;
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  min-height: 100vh;
  height: 100%;
  -webkit-font-smoothing: antialiased;
`
const Button = styled.button`
  padding: 10px 15px;
  position: relative;
  font-size: 1.2em;
  font-weight: 700;
  border: 3px solid #40d9ac;
  box-sizing: border-box;
  transition: background-color 0.3s ease 0s, border-color 0.4s ease 0s, color 0.4s ease 0s;
  display: block;
  width: 100%;
  line-height: 1.3333333;
  border-radius: 0;
  color: #fff;
  background-color: #40d9ac;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  user-select: none;
`

export default function Submit (props) {
  return (
    <Content>
      <Button> Book </Button>
    </Content>
  )
}