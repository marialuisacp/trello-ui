import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardList from '../CardList';

const defaultProps = {
  title: 'List 1',
  list: [
    { text: 'Task 1', labels: [], icons: [] },
    { text: 'Task 2', labels: [], icons: [] },
    { text: 'Task 3', labels: [], icons: [] },
  ]
};
test('should render component CardList', () => {
  const { fragment } = render(<CardList {...defaultProps}></CardList>);
  expect(fragment).toMatchSnapshot();
});

test('should CardList component with empty list', () => {
  const { fragment } = render(<CardList title='Title' list={[]}></CardList>);
  expect(fragment).toMatchSnapshot();
});

test('should have title text', () => {
  render(<CardList {...defaultProps}></CardList>);
  expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
});


