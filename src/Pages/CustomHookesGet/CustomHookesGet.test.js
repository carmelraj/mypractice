import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomHookesGet from './CustomHookesGet';

describe('<CustomHookesGet />', () => {
  test('it should mount', () => {
    render(<CustomHookesGet />);
    
    const customHookesGet = screen.getByTestId('CustomHookesGet');

    expect(customHookesGet).toBeInTheDocument();
  });
});