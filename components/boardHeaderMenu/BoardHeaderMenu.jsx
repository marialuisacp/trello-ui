import React from 'react';
import StyledBoardHeaderMenu from './styles/BoardHeaderMenu.styles';
import TitleBoard from '../titleBoard/TitleBoard';
import HeaderButton from '../headerButton/HeaderButton';
import StyledHeaderColumn from '../header/styles/HeaderColumns.styles';
import Avatar from '../avatar/Avatar';
import HeaderDivisor from '../headerDivisor/HeaderDivisor';

const BoardHeaderMenu = () => (
  <StyledBoardHeaderMenu>
    <StyledHeaderColumn>
      <TitleBoard></TitleBoard>
      <HeaderButton light margin icon='star'></HeaderButton>
      <HeaderButton light margin text='Personal'></HeaderButton>
      <HeaderDivisor />
      <HeaderButton light margin icon='private' text='Private'></HeaderButton>
      <Avatar></Avatar>
      <HeaderButton light margin text='Invite'></HeaderButton>
    </StyledHeaderColumn>
    <StyledHeaderColumn right>
      <HeaderButton light margin text='Butler'></HeaderButton>
      <HeaderButton light margin text='Google Drive'></HeaderButton>
      <HeaderButton light margin icon='overflow-menu-horizontal' text='Show More'></HeaderButton>
    </StyledHeaderColumn>
  </StyledBoardHeaderMenu>
);

export default BoardHeaderMenu;