import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

// const projectID = 'dd6c218e-6ab3-4955-8c41-0355387aff46';
const projectKey = "ac35fbe3-9847-43f5-9a49-382c7306583e";

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Account created successfully, sign in to get started`)

    try {
        axios.post(
            'https://api.chatengine.io/projects/people/',
            { 'username': username, 'secret': password, 'first_name': firstname, 'last_name': lastname },
            { headers: { "Private-Key": projectKey } }
        )
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="input" placeholder="First name" required />
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="input" placeholder="Last name" required />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Submit</span>
            </button>
          </div>
          <p className="forgot-password text-left" style={{marginTop:"10%", marginLeft:"5%"}}>
            Already have an Acconut?{" "}
              <Link className="nav-link" to={"/"}>
            <span className="signup__login">sign in</span>
        </Link>
      </p>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;

