import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExcersieFour from './ExcersieFour';

describe('<ExcersieFour />', () => {
  test('it should mount', () => {
    render(<ExcersieFour />);
    
    const excersieFour = screen.getByTestId('ExcersieFour');

    expect(excersieFour).toBeInTheDocument();
  });
});