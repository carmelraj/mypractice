import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationThree from './PaginationThree';

describe('<PaginationThree />', () => {
  test('it should mount', () => {
    render(<PaginationThree />);
    
    const paginationThree = screen.getByTestId('PaginationThree');

    expect(paginationThree).toBeInTheDocument();
  });
});