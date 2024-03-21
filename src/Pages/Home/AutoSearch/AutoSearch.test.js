import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AutoSearch from './AutoSearch';

describe('<AutoSearch />', () => {
  test('it should mount', () => {
    render(<AutoSearch />);
    
    const autoSearch = screen.getByTestId('AutoSearch');

    expect(autoSearch).toBeInTheDocument();
  });
});