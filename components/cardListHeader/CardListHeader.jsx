import React from 'react';
import StyledCardListHeader from './styles/CardListHeader.styles';
import StyledCardListHeaderTitle from './styles/CardListHeaderTitle.styles';
import HeaderButton from '../headerButton/HeaderButton';

const CardListHeader = ({ title }) => (
  <StyledCardListHeader>
    <StyledCardListHeaderTitle>
      {title}
    </StyledCardListHeaderTitle>
    <HeaderButton light
      icon='overflow-menu-horizontal'
      fontColor='rgb(107, 119, 140)'
      color='transparent'
    >
    </HeaderButton>
  </StyledCardListHeader>
);

export default CardListHeader;