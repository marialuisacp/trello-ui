import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeaderDivisor from '../HeaderDivisor';

test('should render component HeaderDivisor', () => {
  const { fragment } = render(<HeaderDivisor></HeaderDivisor>);
  expect(fragment).toMatchSnapshot();
});
