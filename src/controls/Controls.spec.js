// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'


import Controls from './Controls'

test('Controls render correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
}); 




