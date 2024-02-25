import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchCities from './SearchCities';

describe('<SearchCities />', () => {
  test('it should mount', () => {
    render(<SearchCities />);
    
    const searchCities = screen.getByTestId('SearchCities');

    expect(searchCities).toBeInTheDocument();
  });
});