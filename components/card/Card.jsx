import React from 'react';
import StyledCard from './styles/Card.styles';
import StyledContentCard from './styles/CardContent.styles';
import StyledCardText from './styles/CardText.styles';
import StyledIconEdit from './styles/CardIconEdit.styles';
import StyledCardCover from './styles/CardCover.styles';
import PropTypes from 'prop-types';
import Label from '../label/Label';
import CardItemsIcons from '../cardItemsIcons/CardItemsIcons';

const Card = props => {
  if (props.cover)
    console.log(props.cover);
  return <StyledCard>
    <StyledIconEdit className='icon-edit'></StyledIconEdit>
    {props.cover && <StyledCardCover src={`/assets/${props.cover}.jpg`}></StyledCardCover>}
    <div style={{ display: 'flex' }}>
      {props.labels && props.labels.map((color, key) =>
        <Label color={color} key={key}></Label>
      )}
    </div>
    <StyledContentCard>
      <StyledCardText>{props.text}</StyledCardText>
    </StyledContentCard>
    <CardItemsIcons icons={props.icons}></CardItemsIcons>
  </StyledCard >
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  icons: PropTypes.arrayOf(PropTypes.object),
  cover: PropTypes.string
};

export default Card;