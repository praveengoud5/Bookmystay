import React from "react";
import axios from 'axios';
import HotelList from "./hotelList";
import Navbar from '../Navbar';

class HotelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hotels: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/hotels').then((res) => {
            this.setState({ hotels: res.data })
        })
    }
    render() {
        return (
            <>
                <Navbar />
                <HotelList hotels={this.state.hotels} props={this.props} />
            </>
        )
    }
}

export default HotelPage;