import React from 'react';
import StyledCard from './styles/Card.styles';
import StyledCardText from './styles/CardText.styles';

const Card = ({ text }) => (
  <StyledCard>
    <StyledCardText>{text}</StyledCardText>
  </StyledCard>
);

export default Card;