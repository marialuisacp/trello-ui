import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeaderButton from '../HeaderButton';

test('should render component HeaderButton', () => {
  const { HeaderButtonFragment } = render(<HeaderButton></HeaderButton>);
  expect(HeaderButtonFragment).toMatchSnapshot();
})
