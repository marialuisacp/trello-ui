import React from 'react';
import StyledHeaderButton from './styles/HeaderButton.styles';
import StyledHeaderButtonIcon from './styles/HeaderButtonIcon.styles';
import StyledHeaderButtonText from './styles/HeaderButtonText.styles';
import PropTypes from 'prop-types';
import StyledWhiteSpace from './styles/HeaderButtonWhiteSpace.styles';

const HeaderButton = props => {
  return <StyledHeaderButton color={props.color} margin={props.margin} hover={props.hover}>
    {props.icon &&
      <StyledHeaderButtonIcon fontColor={props.fontColor} className={`icon-${props.icon}`}>
      </StyledHeaderButtonIcon>
      || <StyledWhiteSpace />}
    {props.text &&
      <StyledHeaderButtonText fontColor={props.fontColor} light={props.light}> {props.text}
      </StyledHeaderButtonText>}
  </StyledHeaderButton>
};

HeaderButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.bool,
  fontColor: PropTypes.string,
  hover: PropTypes.string,
  light: PropTypes.bool,
};

export default HeaderButton;