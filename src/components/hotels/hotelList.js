import React from "react";
import Hotel from "./hotel";

const HotelList = ({ hotels,props }) => {
    const hotelList = hotels.map((hotel) => {
        return (
            <Hotel
                key={hotel.hotelName}
                hotelId={hotel.id}
                hotelName={hotel.hotelName}
                city={hotel.city}
                amenities={hotel.amenities}
                phoneNo={hotel.phoneNo}
                address={hotel.address}
                imageUrl={hotel.imageUrl}
                props = {props}
            />
        );
    });

    return <><br /><div className="row">{hotelList}</div></>;
};
export default HotelList;
