// src/Card.js
import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  margin: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: fill;
`;

const CardTitle = styled.div`
  padding: 10px;
  font-size: 16px;
  color: white;
`;

export default function Card({ image, title }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};



