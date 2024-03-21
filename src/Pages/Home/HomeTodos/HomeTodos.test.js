import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeTodos from './HomeTodos';

describe('<HomeTodos />', () => {
  test('it should mount', () => {
    render(<HomeTodos />);
    
    const homeTodos = screen.getByTestId('HomeTodos');

    expect(homeTodos).toBeInTheDocument();
  });
});