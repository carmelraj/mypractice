import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationTwo from './PaginationTwo';

describe('<PaginationTwo />', () => {
  test('it should mount', () => {
    render(<PaginationTwo />);
    
    const paginationTwo = screen.getByTestId('PaginationTwo');

    expect(paginationTwo).toBeInTheDocument();
  });
});