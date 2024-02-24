import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomPage from './HomPage';

describe('<HomPage />', () => {
  test('it should mount', () => {
    render(<HomPage />);
    
    const homPage = screen.getByTestId('HomPage');

    expect(homPage).toBeInTheDocument();
  });
});