import React from 'react'
import styled from 'styled-components'
import Section from './Section.jsx'

export default function DatesAndGuests (props) {
  return (
    <div>
      <Section label='Check In'/>
      <Section label='Check Out'/>
      <Section label='Guest Count'/>
    </div>
  )
}