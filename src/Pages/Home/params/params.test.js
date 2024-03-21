import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Params from './Params';

describe('<Params />', () => {
  test('it should mount', () => {
    render(<Params />);
    
    const params = screen.getByTestId('Params');

    expect(params).toBeInTheDocument();
  });
});