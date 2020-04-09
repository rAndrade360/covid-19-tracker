import React from 'react';
import {Container, Title, Value, Date, Description, Static} from './styles.js'

export default function Card({description, color, data, title}) {
  console.log(data)
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Value>{data?(data).toLocaleString('pt-BR'):null}</Value>
      <Date>Wed 24 mai </Date>
      <Description>{description}</Description>
      <Static>Covid-19</Static>
    </Container>

  );
}
