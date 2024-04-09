import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationOne from './PaginationOne';

describe('<PaginationOne />', () => {
  test('it should mount', () => {
    render(<PaginationOne />);
    
    const paginationOne = screen.getByTestId('PaginationOne');

    expect(paginationOne).toBeInTheDocument();
  });
});