import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../Header';

test('should render component Header', () => {
  const { HeaderFragment } = render(<Header></Header>);
  expect(HeaderFragment).toMatchSnapshot();
})
