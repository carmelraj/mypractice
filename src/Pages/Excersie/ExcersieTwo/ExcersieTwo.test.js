import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExcersieTwo from './ExcersieTwo';

describe('<ExcersieTwo />', () => {
  test('it should mount', () => {
    render(<ExcersieTwo />);
    
    const excersieTwo = screen.getByTestId('ExcersieTwo');

    expect(excersieTwo).toBeInTheDocument();
  });
});