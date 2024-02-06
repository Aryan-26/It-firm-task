import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this is correctly importing your CSS file

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with', email, password);
    // Implement your signup logic here
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button">Signup</button>
        <Link to="/login" className="form-link">Already have an account? Login</Link>
      </form>
    </div>
  );
}

export default Signup;
