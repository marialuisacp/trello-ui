import React from 'react';
import StyledBoard from './styles/Board.styles';
import BoardHeaderMenu from '../boardHeaderMenu/BoardHeaderMenu';
import CardList from '../cardList/CardList';

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

export default Board;