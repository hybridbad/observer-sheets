import React from 'react';
import styled from 'styled-components';
import StatList from '../components/StatList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Headline = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 30px;
  }
`;

export default() => {
  return (
    <Container>
      <Headline><h1>The User Research Observer</h1></Headline>
      <StatList />
    </Container>
  )
}