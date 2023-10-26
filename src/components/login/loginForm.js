import React from 'react';
import './LoginForm.css';
import axios from 'axios';
import { Link } from "react-router-dom";


class LoginUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            password: '',
            successMessage: '',
            errorMessage: ''
        }
    }
    handleChange = (e) => {
        const validateUserId = () => {
            if (Number(e.target.value)) {
                return true
            }
            else {
                return false
            }
        }
        const validatePassword = () => {
            if (e.target.value.length >= 8 && e.target.value.length <= 12) {
                return true
            }
            else {
                return false
            }
        }
        if (e.target.name === 'userId') {
            this.setState({ userId: e.target.value })
            if (!validateUserId()) {
                this.setState({ errorMessage: 'UserId should be a number' });
            }
            else {
                this.setState({ errorMessage: '' });
            }
        }
        else if (e.target.name === 'password') {
            this.setState({ password: e.target.value })
            if (!validatePassword()) {
                this.setState({ errorMessage: 'Password should atleat have 8 and atmost 12 characters' });
            }
            else {
                this.setState({ errorMessage: '' });
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newloginUser = { userId: this.state.userId, password: this.state.password }
        this.loginUser(newloginUser);
    }

    loginUser = (user) => {
        axios.get('http://localhost:4000/users?id=' + user.userId + '&password=' + user.password).then((res) => {
            if (res.data.length > 0) {
                localStorage.setItem('userId', user.userId);
                this.setState({ successMessage: 'You logged in successfully' });
                this.setState({ errorMessage: '' });
                setTimeout(() => {
                    this.props.history.replace('/home');
                }, 1500);
            } else {
                this.setState({ errorMessage: 'Incorrect UserId or Password' });
                this.setState({ successMessage: '' });
            }
        }).catch(() => {

        })
    }
    render() {
        return (
            <>
                <nav className="nav navbar navbar-expand-lg">
                    <Link className="navbar-brand brand" to="/">
                        BonStay
      </Link>
                </nav>
                <div className='formholder'>
                    <form onSubmit={this.handleSubmit}><br />
                        <p className='mytext'>BonStay with Us</p>
                        <div className='form-group'>
                            <label>UserId:</label>
                            <input type='number' required value={this.state.userId} onChange={this.handleChange} name='userId' className='form-control myinput' />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' required className='form-control myinput' value={this.state.password} name='password' onChange={this.handleChange} />
                        </div><div></div>
                        <button type='submit' className='regbtn'>Login</button><br /><br />
                        <span className='text-success'>{this.state.successMessage}</span>
                        <span className='text-danger'>{this.state.errorMessage}</span><br />
                        <div><Link to='/register'>Sign Up</Link> to create a new account.</div>
                        <br /><br />

                    </form>
                </div></>
        );
    }
}

export default LoginUser;