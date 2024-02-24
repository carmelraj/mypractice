import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleFormMultipleStep from './SingleFormMultipleStep';

describe('<SingleFormMultipleStep />', () => {
  test('it should mount', () => {
    render(<SingleFormMultipleStep />);
    
    const singleFormMultipleStep = screen.getByTestId('SingleFormMultipleStep');

    expect(singleFormMultipleStep).toBeInTheDocument();
  });
});