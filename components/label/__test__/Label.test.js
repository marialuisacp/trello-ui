import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Label from '../Label';

const defaultProps = {
  color: 'red'
};

test('should render component Label', () => {
  const { fragment } = render(<Label {...defaultProps}></Label>);
  expect(fragment).toMatchSnapshot();
});
