import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteMap from './SiteMap';

describe('<SiteMap />', () => {
  test('it should mount', () => {
    render(<SiteMap />);
    
    const siteMap = screen.getByTestId('SiteMap');

    expect(siteMap).toBeInTheDocument();
  });
});