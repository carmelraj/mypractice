import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleMaApi from './GoogleMaApi';

describe('<GoogleMaApi />', () => {
  test('it should mount', () => {
    render(<GoogleMaApi />);
    
    const googleMaApi = screen.getByTestId('GoogleMaApi');

    expect(googleMaApi).toBeInTheDocument();
  });
});