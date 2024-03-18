import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExcersieThree from './ExcersieThree';

describe('<ExcersieThree />', () => {
  test('it should mount', () => {
    render(<ExcersieThree />);
    
    const excersieThree = screen.getByTestId('ExcersieThree');

    expect(excersieThree).toBeInTheDocument();
  });
});