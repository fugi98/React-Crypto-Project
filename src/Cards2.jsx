// src/Card.js
import React from 'react';
import styled from 'styled-components';

const Card2Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 150vh;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;s
  text-align: left;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Card2Image = styled.img`
  width: 150vh;
  height: 60vh;
  object-fit: cover;
`;

const Card2Content = styled.div`
  padding: 20px;
  color: #fff;
`;

const Card2Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Card2Description = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
`;

export default function Card2 ({ image, title, description }) {
  return (
    <Card2Container>
      <Card2Image src={image} alt={title} />
      <Card2Content>
        <Card2Title>{title}</Card2Title>
        <Card2Description>{description}</Card2Description>
      </Card2Content>
    </Card2Container>
  );
}
