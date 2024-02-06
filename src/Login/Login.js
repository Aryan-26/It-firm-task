import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Ensure this is correctly importing your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
    // Implement your login logic here
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button">Login</button>
        <Link to="/signup" className="form-link">Don't have an account? Sign up</Link>
      </form>
    </div>
  );
}

export default Login;
