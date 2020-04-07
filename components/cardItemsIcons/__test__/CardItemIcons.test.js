import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardItemsIcons from '../CardItemsIcons';

const defaultProps = {
  icons: [{ icon: 'description' }]
};

test('should render component CardItemsIcons', () => {
  const { CardItemsIconsFragment } = render(<CardItemsIcons {...defaultProps}></CardItemsIcons>);
  expect(CardItemsIconsFragment).toMatchSnapshot();
})
