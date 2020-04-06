import React from 'react';
import Card from '../components/card/Card';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/header/Header';
import BoardHeaderMenu from '../components/boardHeaderMenu/BoardHeaderMenu';

export default function Index() {
  return (
    <div>
      <link href="/fonts/TrellIcons/font-icons-trello.css" rel="stylesheet" key="trello" />
      <GlobalStyle />
      <Header></Header>
      <BoardHeaderMenu></BoardHeaderMenu>
      <h1> Trello UI </h1>
      <Card text='Test card'></Card>
    </div>
  );
}
