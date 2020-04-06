import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BoardHeaderMenu from '../BoardHeaderMenu';

test('should render component BoardHeaderMenu', () => {
  const { fragment } = render(<BoardHeaderMenu></BoardHeaderMenu>);
  expect(fragment).toMatchSnapshot();
});
