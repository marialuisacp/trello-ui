import React from 'react';
import StyledBoard from './styles/Board.styles';
import BoardHeaderMenu from '../boardHeaderMenu/BoardHeaderMenu';
import CardList from '../cardList/CardList';
import PropTypes from 'prop-types';

const Board = ({ data }) => (
  <div>
    <BoardHeaderMenu></BoardHeaderMenu>
    <StyledBoard>
      {data && data.map((item, key) =>
        <CardList key={key} list={item.cards} title={item.title}></CardList>
      )}
    </StyledBoard>
  </div>
);

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Board;