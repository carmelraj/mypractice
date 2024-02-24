import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactFormHookesMui from './ReactFormHookesMui';

describe('<ReactFormHookesMui />', () => {
  test('it should mount', () => {
    render(<ReactFormHookesMui />);
    
    const reactFormHookesMui = screen.getByTestId('ReactFormHookesMui');

    expect(reactFormHookesMui).toBeInTheDocument();
  });
});