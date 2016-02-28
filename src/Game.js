import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Game extends React.Component {
  constructor() {
  super();

  this.state = {
      game: {}
    };
  }

  componentDidMount() {
    this.findGame();
  }

  findGame() {
    console.log("getting game...");

    let gameId = this.props.params.gametId;

    let component = this;

    jQuery.getJSON("https://realgamer.herokuapp.com/games/" + gameId + ".json", function(data) {
      console.log(data);

      component.setState({
        project: data.game
      });
    });
  }

  render() {
    return(
      <div>
      <h1>Game!</h1>
      <h1>{this.state.game.title}</h1>
      <p>{this.state.game.description}</p>
    </div>
    );
  }
}

export default Game;
