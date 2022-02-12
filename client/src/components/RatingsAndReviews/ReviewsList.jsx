import React from 'react';
import data from './dummy_data';
import ReviewItem from './ReviewItem';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {data.results.map((review) => <ReviewItem />)}
      </div>
    );
  }
}

export default ReviewList;
