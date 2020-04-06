import React from 'react';
import StyledBoardHeaderMenu from './styles/BoardHeaderMenu.styles';
import TitleBoard from '../titleBoard/TitleBoard';
import HeaderButton from '../headerButton/HeaderButton';
import StyledHeaderColumn from '../header/styles/HeaderColumns.styles';
import Avatar from '../avatar/Avatar';

const BoardHeaderMenu = () => (
  <StyledBoardHeaderMenu>
    <StyledHeaderColumn>
      <TitleBoard></TitleBoard>
      <HeaderButton light margin icon='star'></HeaderButton>
      <HeaderButton light margin text='Personal'></HeaderButton>
      <HeaderButton light margin icon='private' text='Private'></HeaderButton>
      <Avatar></Avatar>
      <HeaderButton light margin text='Invite'></HeaderButton>
    </StyledHeaderColumn>
  </StyledBoardHeaderMenu>
);

export default BoardHeaderMenu;