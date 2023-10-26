import React, { useState } from 'react';
import './RegisterForm.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const AddUser = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name: name, address: address, phoneNo: phoneNo, email: email, password: password }
        addUser(newUser);
    }
    const handleKeyUp = (e) => {
        const validateName = (name) => {
            if (name.length >= 3) {
                return true
            }
            else {
                return false
            }
        }
        const validatePhone = (phoneNo) => {
            if (phoneNo >= 1000000000 && phoneNo <= 9999999999) {
                return true;
            }
            else {
                return false;
            }
        }
        const validateEmail = (email) => {
            var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            return re.test(email)
        }
        const validatePassword = (password) => {
            if (password.length > 8 && password.length <= 12) {
                return true
            } else return false
        }
        if (e.target.name === 'name') {
            if (!validateName(name)) {
                setErrorMessage('Name should have atleast 3 characters')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'phoneno') {
            if (!validatePhone(phoneNo)) {
                setErrorMessage('Phone No should have 10 digits')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'email') {
            if (!validateEmail(email)) {
                setErrorMessage('Email Id should be a valid one')
            }
            else {
                setErrorMessage('')
            }
        }
        else if (e.target.name === 'password') {
            if (!validatePassword(password)) {
                setErrorMessage('Password should have atleast 8 and atmost 12 characters')
            }
            else {
                setErrorMessage('')
            }
        }
    }
    const addUser = (user) => {
        axios.get('http://localhost:4000/users').then((users) => {
            var flag = false;
            users.data.forEach((user) => {
                if (user.email === email) {
                    flag = true;
                }
            })
            if (!flag) {
                axios.post('http://localhost:4000/users', user).then((res) => {
                    if (res.data) {
                        setSuccessMessage("You are registered with the user id : " + res.data.id);
                        setErrorMessage('');
                        setTimeout(() => { props.history.replace('/login') }, 1500);
                    }
                    else {
                        setErrorMessage("User registration failed");
                        setSuccessMessage('');
                    }
                })
            } else{
                setErrorMessage("User already exists with this email id")
            }

        })
    }
    return (
        <>
            <nav className="nav navbar navbar-expand-lg">
                <Link className="navbar-brand brand" to="/">
                    BonStay
      </Link>
            </nav>
            <div className="container"><br /><br />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={'./images/secret-garden-wooden-door-with-wreath.jpg'} alt='Register' className='regImage' />
                            </td>
                            <td className='formtray'><form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} onKeyUp={handleKeyUp} className='form-control myinput' name='name' required />
                                </div>
                                <div className='form-group'>
                                    <label>Address:</label>
                                    <input type='text' className='form-control myinput' value={address} onChange={(e) => setAddress(e.target.value)} onKeyUp={handleKeyUp} required />
                                </div>
                                <div className='form-group'>
                                    <label>Phone No</label>
                                    <input type='number' className='form-control myinput' value={phoneNo} name='phoneno' onChange={(e) => setPhoneNo(e.target.value)} onKeyUp={handleKeyUp} required />
                                </div>
                                <div className='form-group'>
                                    <label>Email Id</label>
                                    <input type='email' name='email' className='form-control myinput' value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={handleKeyUp} required />
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type='password' className='form-control myinput' name='password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handleKeyUp} required />
                                </div><div></div>
                                <button type='submit' className='regbtn'>Register</button><br /><br />
                                <span className='text-success'>{successMessage}</span>
                                <span className='text-danger'>{errorMessage}</span><br />
                                <Link to='/login'>Login</Link> with your existing account.<br />
                            </form></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AddUser;