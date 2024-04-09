import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Imperative from './Imperative';

describe('<Imperative />', () => {
  test('it should mount', () => {
    render(<Imperative />);
    
    const imperative = screen.getByTestId('Imperative');

    expect(imperative).toBeInTheDocument();
  });
});