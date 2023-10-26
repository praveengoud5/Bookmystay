import React from "react";
import './hotel.css';

const Hotel = ({ hotelId, hotelName, city, amenities, phoneNo, address, imageUrl, props }) => {
    const bookRoom = () => {
        props.history.replace('/bookRoom/' + hotelId + '/' + hotelName);
    }
    const addReview = () => {
        props.history.replace('/addReview/' + hotelId + '/'+ hotelName);
    }
    const viewReview = () => {
        props.history.replace('/viewReview/' + hotelId);

    }
    return (
        <>
            <div className='col-md-2'></div>
            <div className="col-md-8 cards">
                <div className="row">
                    <div className="col-md-3">
                        <img src={'./images/' + imageUrl} className="img-thumbnail cardImg" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="cardcontent">
                            <h5 className="card-title">{hotelName}</h5>
                            <p className="cardText">City : {city}</p>
                            <p className="cardText"> Amenities : {amenities}</p>
                            <p className="cardText">Address : {address}</p>
                            <p className="cardText">Contact No : {phoneNo}</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <button type='button' className='hotelBtn' onClick={bookRoom}>Book A Room</button>
                        <button type='button' className='hotelBtn' onClick={addReview}>Add Review</button>
                        <button type='button' className='hotelBtn' onClick={viewReview}>View Review</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hotel;
