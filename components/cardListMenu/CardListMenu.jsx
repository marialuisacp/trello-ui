import React from 'react';
import StyledCardListMenu from './styles/CardListMenu.styles';
import HeaderButton from '../headerButton/HeaderButton';

const CardListMenu = () => (
  <StyledCardListMenu>
    <HeaderButton
      icon='add'
      text='Add another card'
      light
      fontColor='rgb(107, 119, 140)'
      color='transparent'
      hover='rgba(0, 0, 0, .05)'
    >
    </HeaderButton>
    <HeaderButton
      icon='template-card'
      fontColor='rgb(107, 119, 140)'
      color='transparent'
      hover='rgba(0, 0, 0, .05)'
    >
    </HeaderButton>
  </StyledCardListMenu>
);

export default CardListMenu;