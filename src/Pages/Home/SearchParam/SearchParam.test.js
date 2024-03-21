import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchParam from './SearchParam';

describe('<SearchParam />', () => {
  test('it should mount', () => {
    render(<SearchParam />);
    
    const searchParam = screen.getByTestId('SearchParam');

    expect(searchParam).toBeInTheDocument();
  });
});