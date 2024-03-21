import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeSearchFilter from './HomeSearchFilter';

describe('<HomeSearchFilter />', () => {
  test('it should mount', () => {
    render(<HomeSearchFilter />);
    
    const homeSearchFilter = screen.getByTestId('HomeSearchFilter');

    expect(homeSearchFilter).toBeInTheDocument();
  });
});