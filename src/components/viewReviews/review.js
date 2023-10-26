import React from "react";
import './viewReviews.css';

const Review = ({ review }) => {
    return (
        <div className='subcard'>
            {review}<br />
        </div>
    )
}
export default Review;
