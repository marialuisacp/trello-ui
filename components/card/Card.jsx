import React from 'react';
import StyledCard from './styles/Card.styles';
import StyledCardText from './styles/CardText.styles';
import StyledIconEdit from './styles/CardIconEdit.styles';

const Card = ({ text }) => (
  <StyledCard>
    <StyledCardText>{text}</StyledCardText>
    <StyledIconEdit className='icon-edit'></StyledIconEdit>
  </StyledCard >
);

export default Card;