import React, { useState, useEffect } from "react";
import axios from 'axios';
import BookingsList from "./bookingsList";
import Navbar from '../Navbar';


const BookingsPage = (props) => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        var bookingArr = []
        axios.get('http://localhost:4000/bookings').then((res) => {
            res.data.forEach(booking=>{
                if(booking.userId === Number(userId)){
                    bookingArr.push(booking)
                }
            })
            setBookings(bookingArr);
        })
    }, [])
    return (
        <>
        <Navbar/>
        <BookingsList bookings={bookings} setBooking={setBookings} props={props} />
        </>
    )
}

export default BookingsPage;