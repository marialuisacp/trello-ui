import React from 'react';
import StyledCardList from './styles/CardList.styles';
import CardListHeader from '../cardListHeader/CardListHeader';
import Card from '../card/Card';
import PropTypes from 'prop-types';
import CardListMenu from '../cardListMenu/CardListMenu';

const CardList = ({ list, title }) => (
  <StyledCardList>
    <CardListHeader title={title}></CardListHeader>
    <div>
      {list && list.map((item, key) => <Card text={item.text} labels={item.labels} key={key}></Card>)}
    </div>
    <CardListMenu></CardListMenu>
  </StyledCardList>
);

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};

export default CardList;