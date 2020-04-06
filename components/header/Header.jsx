import React from 'react';
import StyledHeader from './styles/Header.styles';
import HeaderButton from '../headerButton/HeaderButton';

const Header = () => (
  <StyledHeader>
    <span> Teste </span>
    <HeaderButton icon="application-switcher"></HeaderButton>
  </StyledHeader>
);

export default Header;