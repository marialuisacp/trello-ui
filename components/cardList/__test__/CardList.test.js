import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardList from '../CardList';

test('should render component CardList', () => {
  const { fragment } = render(<CardList></CardList>);
  expect(fragment).toMatchSnapshot();
});
