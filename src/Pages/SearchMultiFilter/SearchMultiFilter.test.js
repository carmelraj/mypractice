import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchMultiFilter from './SearchMultiFilter';

describe('<SearchMultiFilter />', () => {
  test('it should mount', () => {
    render(<SearchMultiFilter />);
    
    const searchMultiFilter = screen.getByTestId('SearchMultiFilter');

    expect(searchMultiFilter).toBeInTheDocument();
  });
});