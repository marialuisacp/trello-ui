import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Note from '../Note';

const defaultProps = {
  text: 'Teste de nota',
};

test('test render component Note', () => {
  render(<Note text="testeee"></Note>);
  // const { noteFragment } = 
  // expect(noteFragment()).toMatchSnapshot();
  // expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
})