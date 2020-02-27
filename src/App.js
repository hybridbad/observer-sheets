import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { GlobalStyle } from './components/Global';

import Stats from './containers/Stats';

function App() {
  return (
   <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/">
        <Stats />
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
