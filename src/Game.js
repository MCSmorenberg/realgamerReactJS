import React from 'react';

class Game extends React.Component {
  render() {
    return(
      <div>
      <h1>Game!</h1>
      <p>{this.props.params.gameId}</p>
    </div>
    );
  }
}

export default Game;
