import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

const defaultProps = {
  text: 'Teste de card',
  labels: ['red']
};

test('should render component Card', () => {
  const { CardFragment } = render(<Card text={defaultProps.text}></Card>);
  expect(CardFragment).toMatchSnapshot();
})

test('should have default text in component Card', () => {
  render(<Card text={defaultProps.text}></Card>);

  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
})