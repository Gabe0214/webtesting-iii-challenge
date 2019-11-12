// Test away!
import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'


test('Display renders successfully', ()=> {
    render(<Display/>)
})

test('Displays closed, if closed is true', () => {
    const wrapper = render(<Display closed ={true}/>)

    wrapper.getByText(/closed/i);
})

test('Displays open, if opened', () => {
    const wrapper = render(<Display closed ={false}/>)

    wrapper.getByText(/open/i);
})

test('Locked is displayed if it is true', () => {
    const wrapper = render(<Display locked ={true}/>)

    wrapper.getByText(/locked/i)
})

test('Not Locked if locked is set to false', () => {
    const wrapper = render(<Display locked ={false}/>)

    wrapper.getByText(/unlock/i)
})

test('red-led class is given if gate is closed', () => {
     const wrapper = render(<Display closed ={true}/>)

     wrapper.queryByTestId(/red-led/i)
})

test('red-led class is given if gate is locked', () => {
    const wrapper = render(<Display locked={true}/>)

    wrapper.queryByTestId(/red-led/i)
})


test('green-led class is given if gate is unlocked', () => {
    const wrapper = render(<Display locked={false}/>)

    wrapper.queryByTestId(/green-led/i)
})

test('green-led class is given if gate is open', () => {
    const wrapper = render(<Display closed={false}/>)

    wrapper.queryByTestId(/green-led/i)
})