import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Board from '../Board';
import { data } from '../../../data';

const defaultProps = {
  data: data
};

test('should render component Board', () => {
  const { BoardFragment } = render(<Board {...defaultProps}></Board>);
  expect(BoardFragment).toMatchSnapshot();
})

test('should have default text in component Board', () => {
  render(<Board {...defaultProps}></Board>);
  expect(screen.getByText(defaultProps.data[0].cards[0].text)).toBeInTheDocument();
})
