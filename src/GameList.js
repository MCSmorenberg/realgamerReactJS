import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import GameItem from './GameItem';

class GameList extends React.Component {
  constructor() {
    super();

     this.state = {
       games: []
     };
   }

   reloadGames(event) {
     let component = this;

     jQuery.getJSON("https://realgamer.herokuapp.com/games", function(data) {
       console.log(data);

       component.setState({
         games: data.games
       });
     });
   }

   componentDidMount() {
      this.reloadGames();
    }

   render() {
      return(
        <div>
          <h1>Games!</h1>
            {this.state.games.map(function(game, i) {
              return(
                <GameItem key={game.id} id={game.id} title={game.title} genre={game.genre} developer={game.developer} description={game.description} />
              );
            })}
        </div>
      );
    }
  }

export default GameList;
