import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TitleBoard from '../TitleBoard';

test('should render component TitleBoard', () => {
  const { fragment } = render(<TitleBoard></TitleBoard>);
  expect(fragment).toMatchSnapshot();
});
