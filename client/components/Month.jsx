import React from 'react'
import styled from 'styled-components'
import Week from './Week.jsx'

const Table = styled.tbody`
  font-size: 1.2em;
  font-weight: 300;
  color: #333;
  background-color: #fff;
  border: 1px solid #ebebeb;
  width: 400;
  height: 36px;
  border-radius: 0;
  text-align: center;
  text-shadow: none !important;
  padding: 5px;
`

export default function Month (props) {
  return (
    <table>
      <thead>
      <tr>
        <th className="prev" style={{visibility: 'hidden'}}>«</th>
        <th colSpan="5" className="datepicker-switch">April 2019</th>
        <th className="next" style={{visibility: 'visible'}}>»</th>
      </tr>
      <tr>
        <th className="dow">S</th><th className="dow">M</th><th className="dow">T</th>
        <th className="dow">W</th><th className="dow">T</th><th className="dow">F</th><th className="dow">S</th>
      </tr>
      </thead>
      <Table>
        <Week days={props.week1}/>
        <Week days={props.week2}/>
        <Week days={props.week3}/>
        <Week days={props.week4}/>
        <Week days={props.week5}/>
        <Week days={props.week6}/>
      </Table>
    </table>
  )
}