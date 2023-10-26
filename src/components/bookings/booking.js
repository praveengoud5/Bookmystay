import React from "react";
import './booking.css';
import axios from 'axios';
import PropTypes from 'prop-types';

const Booking = ({ bookingId, startDate, endDate, hotelName, noOfPersons, noOfRooms, typeOfRoom, setBooking, props }) => {
    const cancelBooking = () => {
        const userId = localStorage.getItem('userId');
        axios.delete('http://localhost:4000/bookings/' + bookingId).then((res) => {
            if (res.data) {
                var bookingArr = []
                axios.get('http://localhost:4000/bookings').then((res) => {
                    res.data.forEach(booking => {
                        if (booking.userId === Number(userId)) {
                            bookingArr.push(booking)
                        }
                    })
                    setBooking(bookingArr);
                })
            }
        });
    }
    const reschedule = () => {
        console.log(props)
        props.history.replace('/reschedule/' + bookingId);
    }
    return (
        <>
            <div className="col-md-3 cards">
                <div className="bookingcontent">
                    <h5 className="card-title">Booking Id : {bookingId}</h5>
                    <p className="cardText">Hotel Name : {hotelName}</p>
                    <p className="cardText">Start Date : {new Date(startDate).toLocaleDateString()}</p>
                    <p className="cardText"> End Date : {new Date(endDate).toLocaleDateString()}</p>
                    <p className="cardText">No of Persons : {noOfPersons} </p>
                    <p className="cardText">No of Rooms : {noOfRooms}</p>
                    <p className="cardText">Type of Room : {typeOfRoom}</p>
                    <button type='button' className='hotelBtn' onClick={reschedule}>Reschedule </button>
                    <button type='button' className='hotelBtn' onClick={cancelBooking}>Cancel</button>
                </div>
            </div>
        </>
    );
};
export default Booking;
Booking.defaultProps = {
    bookingId: "B-000",
    endDate: "2020-01-02T00:00:00.000Z",
    hotelName: "Paradise Stay",
    noOfPersons: 2,
    noOfRooms: 2,
    startDate: "2020-01-01T00:00:00.000Z",
    typeOfRoom: "AC",
    setBooking: () => {},
}

Booking.propTypes = {
  /** Bookings data passed as props from BookingsList component */
  /** BookingId  */
  bookingId: PropTypes.string,
   /** StartDate of booking */
  startDate: PropTypes.string,
  /** EndDate of booking */
  endDate: PropTypes.string,
   /** name of the hotel booked */
  hotelName: PropTypes.string,
   /** Number of persons for which hotel is booked */
  noOfPersons: PropTypes.number,
   /** Number of rooms booked */
  noOfRooms: PropTypes.number,
   /** Type of room booked */
  typeOfRoom: PropTypes.string,
   /** Method to update booking */
  setBooking: PropTypes.func

}