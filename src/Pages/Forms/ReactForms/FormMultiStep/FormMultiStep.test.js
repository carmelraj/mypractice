import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormMultiStep from './FormMultiStep';

describe('<FormMultiStep />', () => {
  test('it should mount', () => {
    render(<FormMultiStep />);
    
    const formMultiStep = screen.getByTestId('FormMultiStep');

    expect(formMultiStep).toBeInTheDocument();
  });
});