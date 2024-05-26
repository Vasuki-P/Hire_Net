import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setErrorMessage('');
        console.log('Login successful!');
        const userData = await response.json();
        const userType = userData.userType;
        navigate(userType === 'admin' ? '/dashboard' : '/user');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Network error during authentication:', error);
      setErrorMessage('Network error. Please try again later.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="admin.jpg" alt="background" />
      </div>
      <div className="auth-right">
      <div className='auth-right-conatiner'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className='sign'>Login</button>
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
