import React from 'react';
import styled from 'styled-components';
import Hackney from '../../assets/hackney_white.png';
import Search from '../../assets/icon/search.svg';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 76px;
  background: #0b0c0c;
  color: #fff;
`;

const Inner = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  height: 76px;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;

const Icon = styled.img`
  display: flex;
  height: ${props => (props.search ? '60%' : '80%')};
  width: auto;
`;

export default() => {
  return (
    <Nav>
      <Inner>
        <Icon src={Hackney} alt={'Hackney Icon'} />
        <Icon src={Search} alt={'Search'} search />
      </Inner>
    </Nav>
  )
}