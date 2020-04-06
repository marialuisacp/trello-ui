import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Note from '../Note';

const defaultProps = {
  text: 'Teste de nota',
};

test('should render component Note', () => {
  const { noteFragment } = render(<Note text={defaultProps.text}></Note>);
  expect(noteFragment).toMatchSnapshot();
})

test('should have default text in component Note', () => {
  render(<Note text={defaultProps.text}></Note>);

  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
})