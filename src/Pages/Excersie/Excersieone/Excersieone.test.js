import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Excersieone from './Excersieone';

describe('<Excersieone />', () => {
  test('it should mount', () => {
    render(<Excersieone />);
    
    const excersieone = screen.getByTestId('Excersieone');

    expect(excersieone).toBeInTheDocument();
  });
});