import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Day from './components/Day.jsx'


describe('Day', () => {
  it('displays text based on props.day', () => {
    const day = shallow(<Day day={1}/>);
    
    expect(day.text()).toBe('1');
  });
});