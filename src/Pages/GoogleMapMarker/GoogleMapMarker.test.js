import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleMapMarker from './GoogleMapMarker';

describe('<GoogleMapMarker />', () => {
  test('it should mount', () => {
    render(<GoogleMapMarker />);
    
    const googleMapMarker = screen.getByTestId('GoogleMapMarker');

    expect(googleMapMarker).toBeInTheDocument();
  });
});