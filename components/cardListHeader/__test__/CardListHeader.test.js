import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardListHeader from '../CardListHeader';

test('should render component CardListHeader', () => {
  const { fragment } = render(<CardListHeader></CardListHeader>);
  expect(fragment).toMatchSnapshot();
});

test('should have default text in component CardListHeader', () => {
  render(<CardListHeader title='titulo'></CardListHeader>);
  expect(screen.getByText('titulo')).toBeInTheDocument();
})
