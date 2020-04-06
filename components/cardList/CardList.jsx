import React from 'react';
import StyledCardList from './styles/CardList.styles';
import CardListHeader from '../cardListHeader/CardListHeader';
import Card from '../card/Card';

const CardList = ({ list, title }) => (
  <StyledCardList>
    <CardListHeader title={title}></CardListHeader>
    <div>
      {list.map((item, key) => <Card text={item.text} key={key}></Card>)}
    </div>
  </StyledCardList>
);

export default CardList;