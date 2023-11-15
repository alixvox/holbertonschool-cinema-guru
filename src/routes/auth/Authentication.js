import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login'; // Make sure this component is created
import Register from './Register'; // Make sure this component is created

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const authData = {
      username: username,
      password: password,
    };

    try {
      const endpoint = _switch ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, authData);

      // Assuming your API returns a JSON with an accessToken property
      localStorage.setItem('accessToken', response.data.accessToken);
      setIsLoggedIn(true);
      setUserUsername(username);
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle error, maybe set an error state and display a message
    }
  };

  return (
    <form className="authentication" onSubmit={handleSubmit}>
      <div className="auth-buttons">
        <button type="button" onClick={() => setSwitch(true)}>Sign In</button>
        <button type="button" onClick={() => setSwitch(false)}>Sign Up</button>
      </div>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </form>
  );
};

export default Authentication;
