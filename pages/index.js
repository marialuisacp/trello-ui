import React from 'react';
import Card from '../components/card/Card';
import GlobalStyle from '../styles/GlobalStyle';

export default function Index() {
  return (
    <div>
      <GlobalStyle />
      <h1> Trello UI </h1>
      <Card text='Test card'></Card>
      <style jsx global>
        {`
          @font-face {
            font-family: 'Noto Sans';
            src: url('/fonts/Roboto/Roboto-Regular.ttf'); 
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          margin: 0;
          padding: 0;
          display: block;
          background: #f00
        `}
      </style>
    </div>
  );
}
