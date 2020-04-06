import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardListMenu from '../CardListMenu';

test('should render component CardListMenu', () => {
  const { fragment } = render(<CardListMenu></CardListMenu>);
  expect(fragment).toMatchSnapshot();
});
