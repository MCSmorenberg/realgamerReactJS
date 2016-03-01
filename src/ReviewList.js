import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import GameItem from './GameItem';

class ReviewList extends React.Component {
  constructor() {
    super();

     this.state = {
       reviews: [],
       counts: {
         review: 0
       }
     };
   }

   reloadReviews(event) {
     let gamesId = this.props.gamesId;
     let component = this;

     jQuery.getJSON("https://realgamer.herokuapp.com/games/${gamesId}/reviews", function(data) {
       console.log(data);

       component.setState({
         games: data.reviews
       });
     });
   }

   componentDidMount() {
      this.reloadReviews();
    }

   render() {
      return(
        <div>
        //<ReviewForm onChange={this.reloadReviews.bind(this)} gamesId={this.props.gamesId} />
          <h1>Reviews!</h1>
          <ul>
            {this.state.reviews.map(function(review, i) {
              return(
                <ReviewItem key={review.id} id={review.id} name={review.name} description={review.description} rating={review.rating} gamesId={review.gamesId} onChange={this.reloadReviews.bind(this)} />
              );
            }, this)}
          </ul>
        </div>
      );
    }
  }

export default ReviewList;
