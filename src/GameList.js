import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

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
     console.log("componentDidMount");
     this.reloadGames();
   }

    render() {
      return(
        <div>
          <h1>Games!</h1>
            <table>
              <tbody>
                {this.state.games.map(this.renderGame.bind(this))
             </tbody>
           </table>
        </div>
      );
    }
  }

export default GameList;
