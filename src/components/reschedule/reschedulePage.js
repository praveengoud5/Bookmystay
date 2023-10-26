import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const ReschedulePage = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBooking = { bookingId: props.match.params.bookingId, startDate: startDate, endDate: endDate}
        reschedulebook(newBooking);
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

    }
    const reschedulebook = (booking) => {
        axios.patch('http://localhost:4000/bookings/'+booking.bookingId, booking).then((res) => {
            if (res.data.status !== 'error') {
                setSuccessMessage('Successfully rescheduled the booking');
                setErrorMessage('');
                setTimeout(() => { props.history.replace('/bookings') }, 1500)
            }
            else {
                setErrorMessage(res.data.data.message)
                setSuccessMessage('')
            }
        })
    }
    return (
        <>
            <Navbar />
            <div className='bookformholder'>
                <form onSubmit={handleSubmit}><br />
                    <p className='mytext'>Book a Room</p>
                    <div className='form-group'>
                        <label>Start Date</label>
                        <input type='date' required value={startDate} onChange={handleChange} className='form-control myinput' name='startDate' />
                    </div>
                    <div className='form-group'>
                        <label>End Date</label>
                        <input type='date' required className='form-control myinput' value={endDate} onChange={handleChange} name='endDate' />
                    </div>
                    <button type='submit' className='regbtn'>Reschedule</button><br /><br />
                    <span className='text-success'>{successMessage}</span>
                    <span className='text-danger'>{errorMessage}</span><br /><br />
                </form>
            </div>
        </>
    )

}

export default ReschedulePage;