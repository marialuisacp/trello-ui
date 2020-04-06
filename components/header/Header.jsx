import React from 'react';
import StyledHeader from './styles/Header.styles';
import HeaderButton from '../headerButton/HeaderButton';
import StyledHeaderColumn from './styles/HeaderColumns.styles';
import StyledHeaderLogo from './styles/HeaderLogo.styles';
import Avatar from '../avatar/Avatar';

const Header = () => (
  <StyledHeader>
    <StyledHeaderColumn>
      <HeaderButton icon='application-switcher'></HeaderButton>
      <HeaderButton icon='house'></HeaderButton>
      <HeaderButton icon='board' text='Boards'></HeaderButton>
    </StyledHeaderColumn>
    <StyledHeaderColumn>
      <StyledHeaderLogo></StyledHeaderLogo>
    </StyledHeaderColumn>
    <StyledHeaderColumn right={true}>
      <HeaderButton icon='add'></HeaderButton>
      <HeaderButton icon='information'></HeaderButton>
      <HeaderButton icon='notification' color='#eb5a46'></HeaderButton>
      <Avatar></Avatar>
    </StyledHeaderColumn>
  </StyledHeader>
);

export default Header;