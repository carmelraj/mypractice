import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Throtelling from './Throtelling';

describe('<Throtelling />', () => {
  test('it should mount', () => {
    render(<Throtelling />);
    
    const throtelling = screen.getByTestId('Throtelling');

    expect(throtelling).toBeInTheDocument();
  });
});