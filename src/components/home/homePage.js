import React from 'react';
import './home.css';
import Navbar from '../Navbar';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='container holder'>
        <p className='mycontent'>
		    <br/>Experience the art of worry-free travel and create unforgettable memories with <strong>BookMyStay</strong>.<br/> Discover elegantly designed spaces featuring modern amenities that redefine comfort and luxury.<br/> With our lightning-fast BookMyStay app, your dream getaway is just a few taps away.<br/>
        </p>
      </div>
    </>
  );
}

export default HomePage;