import React from 'react';
import { Link } from 'react-router';

class GameList extends React.Component {
  render() {
    let gameId = 1;

      return(
        <div>
          <h1>Games!</h1>
          <p>
          <Link to={`/game/${gameId}`}>Game 1</Link>
        </p>
        {this.props.children}
        </div>
      );
    }
  }

export default GameList;
