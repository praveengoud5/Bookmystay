import React from 'react';
import './App.css';
import HotelPage from "./components/hotels";
import RegisterPage from './components/register/RegisterForm';
import LoginPage from './components/login/loginForm';
import HomePage from './components/home/homePage';
import BookRoomPage from './components/bookRoom/BookRoomPage';
import AddReviewPage from './components/addReview/addReviewPage';
import ViewReviewPage from './components/viewReviews';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookingsPage from './components/bookings';
import ReschedulePage from './components/reschedule/reschedulePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/hotels" component={HotelPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/bookRoom/:hotelId/:hotelName" component={BookRoomPage} />
        <Route path="/addReview/:hotelId/:hotelName" component={AddReviewPage} />
        <Route path="/viewReview/:hotelId" component={ViewReviewPage} />
        <Route path="/bookings" component={BookingsPage} />
        <Route path="/reschedule/:bookingId" component={ReschedulePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
