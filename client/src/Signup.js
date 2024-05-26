import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 201) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="admin.jpg" alt="background" />
      </div>
      <div className="auth-right">
      <div className='auth-right-conatiner'>
        <form>
            <h1>Signup</h1>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="button" className='sign' onClick={handleSignup}>Signup</button>
            {error && <p className="error-message">{error}</p>}
            <p>Already registered? <Link to="/login">Login</Link></p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
