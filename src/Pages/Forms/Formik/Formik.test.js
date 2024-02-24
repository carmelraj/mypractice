import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Formik from './Formik';

describe('<Formik />', () => {
  test('it should mount', () => {
    render(<Formik />);
    
    const formik = screen.getByTestId('Formik');

    expect(formik).toBeInTheDocument();
  });
});