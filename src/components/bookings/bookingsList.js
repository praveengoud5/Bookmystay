import React from "react";
import Booking from "./booking";
import "./booking";

const BookingsList = ({ bookings, setBooking, props }) => {
    let bookingsList;
    if (bookings.length > 0) {
        bookingsList = bookings.map((booking) => {
            return (
                <Booking
                    key={booking.id}
                    bookingId={booking.id}
                    startDate={booking.startDate}
                    endDate={booking.endDate}
                    hotelName={booking.hotelName}
                    noOfPersons={booking.noOfPersons}
                    noOfRooms={booking.noOfRooms}
                    typeOfRoom={booking.typeOfRoom}
                    setBooking={setBooking}
                    props={props}
                />
            );
        });
        return <><br /><div className="row mycontainer">{bookingsList}</div></>;
    }
    else {
        bookingsList = 'No Bookings Yet.Book a Room and Enjoy the Stay.'
        return <><br /><div className="mytext mybookingtext">{bookingsList}</div></>;
    }

};
export default BookingsList;
