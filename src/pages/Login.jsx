import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const URL = process.env.REACT_APP_URL
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

    try {
      const response = await fetch(URL+'token/login/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in a secure way, such as in a state or a cookie.
        console.log('Received token:', token);
        console.log(data)
        localStorage.setItem('token', data.auth_token)
        navigate('/sessions')
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <div>Don't have an account? <span><Link to="/signup">Sign Up here</Link></span></div>
    </div>
  );
}

export default Login;