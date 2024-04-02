import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExerciseFive from './ExerciseFive';

describe('<ExerciseFive />', () => {
  test('it should mount', () => {
    render(<ExerciseFive />);
    
    const exerciseFive = screen.getByTestId('ExerciseFive');

    expect(exerciseFive).toBeInTheDocument();
  });
});