import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class GameItem extends React.Component {
   constructor() {
     super();
   }

   componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      title: this.props.title,
      genre: this.props.genre,
      developer: this.props.developer,
      description: this.props.description
    })
  }

   render() {
     return(
      <div>
        <Link to={`/game/${this.state.id}`}><h2>{this.state.title}</h2></Link>
        <p>Genre: <strong>{this.state.genre}</strong></p>
        <p>Developer: <strong>{this.state.developer}</strong></p>
        <p>{this.state.description}</p>
        <p>Average rating: {this.state.average_rating}</p>
      </div>
     );
   }
 }

 export default GameItem;
