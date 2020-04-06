import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import HeaderButton from '../HeaderButton';

afterEach(cleanup);

const defaultProps = {
  icon: 'board',
  text: 'Teste',
  color: '#FF0000',
  light: false,
  fontColor: '#00FF00',
  margin: false
};

test('should render component HeaderButton', () => {
  const { HeaderButtonFragment } = render(<HeaderButton {...defaultProps}></HeaderButton>);
  expect(HeaderButtonFragment).toMatchSnapshot();
})

test('should have text in HeaderButton', () => {
  render(<HeaderButton {...defaultProps}></HeaderButton>);
  console.log(defaultProps);

  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
})