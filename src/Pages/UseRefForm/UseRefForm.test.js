import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseRefForm from './UseRefForm';

describe('<UseRefForm />', () => {
  test('it should mount', () => {
    render(<UseRefForm />);
    
    const useRefForm = screen.getByTestId('UseRefForm');

    expect(useRefForm).toBeInTheDocument();
  });
});