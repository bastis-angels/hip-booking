import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import moment from 'moment';

import Banner from './components/Banner.jsx'
import DatesAndGuests from './components/DatesAndGuests.jsx'
import Month from './components/Month.jsx'
import Container from './components/Container.jsx'
import Submit from './components/Submit.jsx'

const BookingWidget = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #333;
  width: 400px;
  line-height: 1.42;
`
const Well = styled.div`
  padding: 0;
  margin-bottom: 0;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    // let first = new Date(now.setDate(1));
    // let month = now.getMonth();
    // let last = 31;
    // if (month === 1) {
    //   last = 28;
    // } else if (month === 8 || month === 3 || month === 5 || month === 10) {
    //   last = 30;
    // }
    // let month = [];
    // for (let i = 1; i <= last; i++) {
    //   month.push(i);
    // }

    // while (month.length > 0) {

    // }
    // let monthStart = first.getDay();
    // let week1 = Array(7).fill('');
    // let week2 = Array(7).fill('');
    // let week3 = Array(7).fill('');
    // let week4 = Array(7).fill('');
    // let week5 = Array(7).fill('');
    // let week6 = Array(7).fill('');

    let week1 = ['', 1, 2, 3, 4, 5, 6];
    let week2 = [7, 8, 9, 10, 11, 12, 13];
    let week3 = [14, 15, 16, 17, 18, 19, 20];
    let week4 = [21, 22, 23, 24, 25, 26, 27];
    let week5 = [28, 29, 30, 31, '', '', ''];
    let week6 = ['', '', '', '', '', '', ''];

    this.state = {
      currentYear: now.getFullYear(),
      currentMonth: now.getMonth(),
      currentDay: now.getDate(),
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6
    }
  }

  render() {
    return (
      <BookingWidget>
        <Banner />
        <Well>
          <DatesAndGuests />
          <Month week1={this.state.week1} week2={this.state.week2} week3={this.state.week3} week4={this.state.week4} week5={this.state.week5} week6={this.state.week6} />
          <Container label='Pricing' detail={{left: 'Base price', right: '$60.00'}}/>
          <Container label='Subtotal' detail={{left: '$60.00 x 2 nights', right: '$120.00'}}/>
          <Submit />
        </Well>
      </BookingWidget>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));