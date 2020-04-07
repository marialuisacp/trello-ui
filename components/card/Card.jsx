import React from 'react';
import StyledCard from './styles/Card.styles';
import StyledContentCard from './styles/CardContent.styles';
import StyledCardText from './styles/CardText.styles';
import StyledIconEdit from './styles/CardIconEdit.styles';
import PropTypes from 'prop-types';
import Label from '../label/Label';
import CardItemsIcons from '../cardItemsIcons/CardItemsIcons';

const Card = ({ text, labels, icons }) => (
  <StyledCard>
    <div>
      <div style={{ display: 'flex' }}>
        {labels && labels.map((color, key) =>
          <Label color={color} key={key}></Label>
        )}
      </div>
      <StyledContentCard>
        <StyledCardText>{text}</StyledCardText>
      </StyledContentCard>
      <CardItemsIcons icons={icons}></CardItemsIcons>
    </div>
    <StyledIconEdit className='icon-edit'></StyledIconEdit>
  </StyledCard >
);

Card.propTypes = {
  text: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  icons: PropTypes.arrayOf(PropTypes.string),
};

export default Card;