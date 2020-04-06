import React from 'react';
import StyledCard from './styles/Card.styles';
import StyledCardText from './styles/CardText.styles';
import StyledIconEdit from './styles/CardIconEdit.styles';
import PropTypes from 'prop-types';

const Card = ({ text }) => (
  <StyledCard>
    <StyledCardText>{text}</StyledCardText>
    <StyledIconEdit className='icon-edit'></StyledIconEdit>
  </StyledCard >
);

Card.propTypes = {
  text: PropTypes.string.isRequired
};

export default Card;