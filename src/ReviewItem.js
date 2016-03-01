import React from 'react';

class ReviewItem extends React.Component {
   constructor() {
     super();
   }

   componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      title: this.props.name,
      description: this.props.description,
      rating: this.props.rating
    })
  }

   render() {
     return(
      <div>
        <h3>{this.state.Name}</h3>
        <p>{this.state.description}</p>
        <p>{this.state.rating}</p>
      </div>
     );
   }
 }

 export default ReviewItem;
