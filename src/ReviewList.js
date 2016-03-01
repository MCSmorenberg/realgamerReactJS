import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ReviewItem from './ReviewItem';

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
     console.log(this.props)
     let gameId = this.props.gameId;

     let component = this;

     jQuery.getJSON(`https://realgamer.herokuapp.com/games/${gameId}/reviews`, function(data) {
       console.log(data);

       component.setState({
         reviews: data.reviews
       });
     });
   }

   componentDidMount() {
      this.reloadReviews();
    }

   render() {
      return(
        <div>
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
