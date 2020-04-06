import React from 'react';
import Card from '../components/card/Card';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/header/Header';

import { data } from '../data';
import Board from '../components/board/Board';

export default function Index() {
  return (
    <div>
      <link href="/fonts/TrellIcons/font-icons-trello.css" rel="stylesheet" key="trello" />
      <GlobalStyle />
      <Header></Header>

      <Board data={data}></Board>
    </div>
  );
}
