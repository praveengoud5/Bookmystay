import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
	const [userId, setUserId] = useState('');
	const [links, setLinks] = useState('');

	useEffect(() => {
		setUserId(localStorage.getItem('userId'));
		const logout = () => {
			localStorage.removeItem('userId');
			setUserId('');
		}

		setLinks((
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<Link className="nav-link link active" to="/home">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to="/hotels">
						Hotels
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to="/bookings">
						Bookings
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to="/login" onClick={logout}>
						Logout
					</Link>
				</li>
			</ul>))

		// else {
		// 	setLinks(<ul className="navbar-nav ml-auto">
		// 		<li className="nav-item active">
		// 			<Link className="nav-link link active" to="/home">
		// 				Home
		// 		</Link>
		// 		</li>
		// 		<li className="nav-item">
		// 			<Link className="nav-link link" to="/login">
		// 				Login
		// 		</Link>
		// 		</li>
		// 		<li className="nav-item">
		// 			<Link className="nav-link link" to="/register">
		// 				Register
		// 		</Link>
		// 		</li>
		// 	</ul>)
		// }
	}, [userId])

	return (
		<nav className="nav navbar navbar-expand-lg">
			<Link className="navbar-brand brand" to="/">
		BookMyStay
      </Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i className="fa fa-bars bar"></i>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				{links}
			</div>
		</nav>
	);
};
export default Navbar;
