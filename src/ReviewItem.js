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

      </div>
     );
   }
 }

 export default ReviewItem;
