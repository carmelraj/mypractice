import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactFormHookes from './ReactFormHookes';

describe('<ReactFormHookes />', () => {
  test('it should mount', () => {
    render(<ReactFormHookes />);
    
    const reactFormHookes = screen.getByTestId('ReactFormHookes');

    expect(reactFormHookes).toBeInTheDocument();
  });
});