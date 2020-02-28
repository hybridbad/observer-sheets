import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { GlobalStyle } from './components/Global';

import Nav from './components/Nav';

import Stats from './containers/Stats';

const MainBody = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
   <Router>
    <GlobalStyle />
    <Nav />
    <Switch>
      <MainBody>
      <Route exact path="/">
        <Stats />
      </Route>
      </MainBody>
    </Switch>
   </Router>
  );
}

export default App;
