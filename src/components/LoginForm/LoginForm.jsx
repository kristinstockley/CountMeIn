import { useState } from 'react';
import * as usersService from '../../utilities/users-service';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Please Try Again');
    }
  }

  return (
    <div className="LoginForm">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className="form-input">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-outline">LOG IN</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
