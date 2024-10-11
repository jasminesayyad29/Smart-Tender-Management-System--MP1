import React, { useState } from 'react';
import './Login.css'; 
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'Bidder',
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, role } = formData; 
        axios.post('http://localhost:3001/login', { username, password, role })
            .then(result => {
                console.log(result);
                if( result === "Success")
                {
                    navigate('/home')
                }
                
            })
            .catch(err => console.log(err));

        //console.log(formData);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Are you a:</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="bidder">Bidder</option>
                        <option value="tender-officer">Tender Officer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
