import React from 'react';
import StyledHeader from './styles/Header.styles';
import HeaderButton from '../headerButton/HeaderButton';
import StyledHeaderColumn from './styles/HeaderColumns.styles';
import StyledHeaderLogo from './styles/HeaderLogo.styles';

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
      <HeaderButton icon='notification'></HeaderButton>
    </StyledHeaderColumn>
  </StyledHeader>
);

export default Header;