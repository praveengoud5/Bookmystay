import React from "react";
import Review from './review';
import './viewReviews.css';

const ReviewsList = ({ reviews }) => {
    let reviewList;
    if (reviews.length > 0) {
        reviewList = reviews.map((review) => {
            return (
                <Review
                    key={review}
                    review={review}
                />

            );
        });
    }
    else {
        reviewList = 'No reviews added yet'
    }
    return <><br /><br /><br /><div className="reviewcard"><br/>
        <p className='mytext'>Customers' Reviews</p>
        {reviewList}<br/><br/>
    </div></>;
};
export default ReviewsList;
