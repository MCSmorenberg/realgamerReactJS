import React from 'react';

class ReviewItem extends React.Component {
   constructor() {
     super();

     this.state = {
       name: "",
       description: "",
       rating: ""
     };
   }

   componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      rating: this.props.rating
    })
  }

   render() {
     return(
      <div>
        <h3>{this.state.name} says;</h3>
        <p>{this.state.description}</p>
        <p>Rating: {this.state.rating}★</p>
      </div>
     );
   }
 }

 export default ReviewItem;
