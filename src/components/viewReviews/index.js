import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewsList from "./ReviewList";
import Navbar from '../Navbar';

const ViewReviewsPage = (props) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/hotels/'+props.match.params.hotelId).then((res) => {
            setReviews(res.data.reviews);
        })
    });
    return (
        <>
            <Navbar />
            <ReviewsList reviews={reviews} />
        </>
    )
}

export default ViewReviewsPage;