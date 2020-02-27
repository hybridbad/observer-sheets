import React from 'react';
import styled from 'styled-components';
import StatList from '../components/StatList';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default() => {
  return (
    <Container>
      <StatList />
    </Container>
  )
}