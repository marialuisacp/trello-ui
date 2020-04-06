import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';

test('should render component Avatar', () => {
  const { fragment } = render(<Avatar></Avatar>);
  expect(fragment).toMatchSnapshot();
});
