import React, { useState } from 'react';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin@123') {
      window.location.href = '/admin';
    } else {
      setError('Username or password is incorrect');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="admin.jpg" alt="background" />
      </div>
      <div className="auth-right">
      <div className='auth-right-conatiner'>
        <form onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='sign'>Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
      </div>
    </div>
  );
}

export default AdminLogin;
