import React from 'react';
import StyledHeaderButton from './styles/HeaderButton.styles';
import StyledHeaderButtonIcon from './styles/HeaderButtonIcon.styles';
import StyledHeaderButtonText from './styles/HeaderButtonText.styles';
import PropTypes from 'prop-types';

const HeaderButton = ({ icon, text }) => (
  <StyledHeaderButton>
    <StyledHeaderButtonIcon className={`icon-${icon}`}></StyledHeaderButtonIcon>
    {text && <StyledHeaderButtonText> {text} </StyledHeaderButtonText>}
  </StyledHeaderButton>
);

HeaderButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default HeaderButton;