import React from 'react';
 import jQuery from 'jquery';

 class ReviewForm extends React.Component {
   constructor() {
     super();
   }

   createReview(event) {
     event.preventDefault();

     let component = this;
     let gameId = this.props.gameId;
     let name = this.refs.newName.value;
     let description = this.refs.newDescription.value;
     let rating = this.refs.newRating.value;
     let newReview = {
       id: null,
       name: name,
       description: description,
       rating: rating
     };

     jQuery.ajax({
       type: "POST",
       url: `https://realgamer.herokuapp.com/games/${gameId}/reviews`,
       data: JSON.stringify({
           review: newReview
       }),
       contentType: "application/json",
       dataType: "json"
     })
       .done(function(data) {
         component.props.onChange();
         component.refs.newName.value = "";
         component.refs.newDescription.value = "";
         component.refs.newRating.value = "";
       })

       .fail(function(error) {
         console.log(error);
       });
   }

   render() {
     return (
       <form onSubmit={this.createReview.bind(this)}>
         <div>
          <input ref="newName" placeholder="Put your name here!" />
        </div>
        <div>
          <input ref="newDescription" placeholder="Put your review here!" />
        <div>
        </div>
          <input ref="newRating" placeholder="1-5" />
         </div>
         <div>
           <button type="submit">Send</button>
         </div>
       </form>
     );
   }
 }

 export default ReviewForm;
