import React, { useState } from 'react';
import './bookRoom.css';
import axios from 'axios';
import Navbar from '../Navbar';

const BookRoomPage = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [noOfPersons, setNoOfPersons] = useState('');
    const [noOfRooms, setNoOfRooms] = useState('');
    const [typeOfRoom, setTypeOfRoom] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBooking = { startDate: startDate, endDate: endDate, noOfPersons: Number(noOfPersons), noOfRooms: Number(noOfRooms), typeOfRoom: typeOfRoom }
        bookRoom(newBooking);
    }
    const bookRoom = (booking) => {
        booking['hotelId'] = Number(props.match.params.hotelId);
        booking['hotelName'] = props.match.params.hotelName;
        const userId = localStorage.getItem('userId');
        booking['userId'] = Number(userId);
        axios.post('http://localhost:4000/bookings', booking).then((res) => {
            setSuccessMessage('Booked a Room successfully');
            setErrorMessage('');
        })
    }
    const handleChange = (e) => {
        if (e.target.name === 'startDate') {
            setStartDate(e.target.value)
            const validateStartDate = () => {
                if (new Date(e.target.value) >= new Date()) {
                    return true
                }
                else {
                    return false
                }
            }
            if (!validateStartDate()) {
                setErrorMessage('Start Date should not be a previous date')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'endDate') {
            setEndDate(e.target.value)
            const validateEndDate = () => {
                if (new Date(e.target.value) >= new Date(startDate)) {
                    return true
                }
                else {
                    return false
                }
            }
            if (!startDate) {
                setErrorMessage('Set Start Date first')
            }
            else if (!validateEndDate()) {
                setErrorMessage('End Date should not be less than Start Date')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'noOfPersons') {
            setNoOfPersons(e.target.value)
            const validateNoOfPersons = () => {
                if (e.target.value > 0 && e.target.value <= 5) {
                    return true
                }
                else {
                    return false
                }
            }
            if (!validateNoOfPersons()) {
                setErrorMessage('No of Persons should be greater than 0 and less than or equal to 5 ')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'noOfRooms') {
            setNoOfRooms(e.target.value)
            const validateNoOfRooms = () => {
                if (e.target.value > 0 && e.target.value <= 3) {
                    return true
                }
                else {
                    return false
                }
            }
            if (!validateNoOfRooms()) {
                setErrorMessage('No of Rooms should be greater than 0 and less than or equal to 3 ')
            }
            else {
                setErrorMessage('')
            }
        }

    }
    return (
        <>
            <Navbar />
            <div className='bookformholder'>
                <form onSubmit={handleSubmit}><br />
                    <p className='mytext'>Book a Room</p>
                    <div className='form-group'>
                        <label>Start Date</label>
                        <input type='date' value={startDate} required name='startDate' onChange={handleChange} className='form-control myinput' />
                    </div>
                    <div className='form-group'>
                        <label>End Date</label>
                        <input type='date' className='form-control myinput' required value={endDate} name='endDate' onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>No of Persons</label>
                        <input type='number' className='form-control myinput' required value={noOfPersons} name='noOfPersons' onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>No of Rooms</label>
                        <input type='number' className='form-control myinput' required value={noOfRooms} name='noOfRooms' onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>Type of Room</label>
                        <select className='form-control myinput' value={typeOfRoom} onChange={(e) => setTypeOfRoom(e.target.value)}>
                            <option value=''>-- Select Room Type --</option>
                            <option value='AC'>AC</option>
                            <option value='Non AC'>Non AC</option>
                        </select>
                    </div>
                    <button type='submit' className='regbtn'>Book</button><br /><br />
                    <span className='text-success'>{successMessage}</span>
                    <span className='text-danger'>{errorMessage}</span><br /><br />
                </form>
            </div>
        </>
    )

}

export default BookRoomPage;