import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import GameList from './GameList';
import Game from './Game';
import PageNotFound from './PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/gamelist" component={GameList} />
      <Route path="/game/:gameId" component={Game}/>
      <Route path="/contact" component={Contact}/>
      <Route path="*" />
    </Route>
  </Router>
), document.getElementById('root'));
