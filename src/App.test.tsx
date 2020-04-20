import React from 'react';
import { render } from '@testing-library/react';
import Articles from './Articles';

test('renders learn react link', () => {
  const { getByText } = render(<Articles />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
