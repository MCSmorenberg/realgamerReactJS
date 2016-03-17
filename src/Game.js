import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewList from './ReviewList';

class Game extends React.Component {
  constructor() {
  super();

  this.state = {
      game: {},
      average_rating: 0
    };
  }

  componentDidMount() {
    this.findGame();
  }

  findGame() {
    console.log("getting game...");

    let gameId = this.props.params.gameId;

    let component = this;

    jQuery.getJSON("https://realgamer.herokuapp.com/games/" + gameId + ".json", function(data) {
      console.log(data);

      component.setState({
        game: data.game,
        average_rating: data.average_rating
      });
    });
  }

  render() {
    return(
      <div>
        <h1>Reviews of {this.state.game.title}</h1>
        <p><strong>Average rating:</strong> {this.state.average_rating}★</p>
        <ReviewList gameId={this.props.params.gameId} />
      </div>
    );
  }
}

export default Game;
