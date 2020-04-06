import React from 'react';
import StyledHeaderButton from './styles/HeaderButton.styles';
import StyledHeaderButtonText from './styles/HeaderButtonText.styles';

const HeaderButton = ({ icon }) => (
  <StyledHeaderButton>
    <StyledHeaderButtonText className={`icon-${icon}`}></StyledHeaderButtonText>
  </StyledHeaderButton>
);

export default HeaderButton;