// src/CardGrid.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;

  @media (max-width: 1200px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function CardGrid ({ cards }) {
  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </GridContainer>
  );
}