import React, { useState } from 'react';
import './addReview.css';
import axios from 'axios';
import Navbar from '../Navbar';

const AddReviewPage = (props) => {
    const [reviews, setReviews] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { hotelName: props.match.params.hotelName, reviews: reviews }
        addReview(newReview);
    }
    const addReview = (review) => {
        var reviewsArr = [];
        axios.get('http://localhost:4000/hotels/' + props.match.params.hotelId).then((res)=>{
            reviewsArr = res.data.reviews;
            reviewsArr.push(review.reviews)
            axios.patch('http://localhost:4000/hotels/' + props.match.params.hotelId, {reviews:reviewsArr}).then((res) => {
            if (res.data.status !== 'error') {
                setSuccessMessage('Review added successfully');
                setErrorMessage('');
            }
            else {
                setErrorMessage('Could not add the review')
                setSuccessMessage('')
            }
        })
        })
        
    }
    return (
        <>
            <Navbar />
            <div className='reviewholder'>
                <form onSubmit={handleSubmit}><br />
                    <p className='mytext'>Your Reviews Means a Lot for Us</p>
                    <div className='form-group'>
                        <label>Add your Review</label>
                        <textarea type='string' required value={reviews} onChange={(e) => setReviews(e.target.value)} className='form-control' rows='4' />
                    </div>
                    <button type='submit' className='reviewbtn'>Add Review</button>
                    <span className='text-success'>{successMessage}</span>
                    <span className='text-danger'>{errorMessage}</span><br /><br />
                </form>
            </div>
        </>
    )

}

export default AddReviewPage;