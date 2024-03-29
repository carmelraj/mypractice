import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocalStorage from './LocalStorage';

describe('<LocalStorage />', () => {
  test('it should mount', () => {
    render(<LocalStorage />);
    
    const localStorage = screen.getByTestId('LocalStorage');

    expect(localStorage).toBeInTheDocument();
  });
});