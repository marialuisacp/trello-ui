import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardListHeader from '../CardListHeader';

test('should render component CardListHeader', () => {
  const { fragment } = render(<CardListHeader title='title 1'></CardListHeader>);
  expect(fragment).toMatchSnapshot();
});

test('should have default text in component CardListHeader', () => {
  render(<CardListHeader title='title 1'></CardListHeader>);
  expect(screen.getByText('title 1')).toBeInTheDocument();
})
