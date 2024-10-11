import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        phone: '',
        agreeTerms: false,
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Handle signup logic here
        const { name, email, password, role, phone, agreeTerms } = formData;
        // Log the filled input values
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Role:", role);
        console.log("Phone:", phone);
        console.log("Agree to Terms:", agreeTerms);
        // Make the API call to register the user
        axios.post('http://localhost:3001/register', { name, email, password, role, phone, agreeTerms })
            .then(result => {
                console.log(result);
                navigate('/login')
                // Optionally reset form data or handle success
            })
            .catch(err => console.log(err));
        setFormData({name:"" , email: "" , role:"" , password: "" , confirmPassword: "" , phone:"" , agreeTerms:false});
    };
    

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Registration Page</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        value={formData.email}
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
                <div className="form-group">
                    <label htmlFor="password">Create Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone No.</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                    />
                    <label>I agree to all terms and conditions</label>
                </div>
                <button type="submit">Signup</button>
                <p>
                Already a member? <a href="/Login">Login</a>
                </p>
            </form>
            
        </div>
    );
};

export default Signup;
