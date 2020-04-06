import React from 'react';
import StyledCardList from './styles/CardList.styles';
import CardListHeader from '../cardListHeader/CardListHeader';
import Card from '../card/Card';

const CardList = () => (
  <StyledCardList>
    <CardListHeader title='Tarefas pra hoje'></CardListHeader>
    <div>
      <Card text='Criar a estrutura do projeto'></Card>
      <Card text='Definir padrões estruturais do projeto'></Card>
      <Card text='Instalação e configuração inicial'></Card>
      <Card text='Estudar o tema: Cleancode: Nomeclatura de variáveis e complexidade ciclomática'></Card>
    </div>
  </StyledCardList>
);

export default CardList;