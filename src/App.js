import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

// Import Dashboard and Authentication components if they exist
// import Dashboard from './path-to-Dashboard';
// import Authentication from './path-to-Authentication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      sendAuthRequest(accessToken).then(response => {
        if (response.username) {
          setIsLoggedIn(true);
          setUserUsername(response.username);
        }
      }).catch(error => {
        console.error('Authentication error:', error);
        // Handle any errors, possibly reset the auth state
      });
    }
  }, []);

  function sendAuthRequest(accessToken) {
    return fetch('http://localhost:8000/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard username={userUsername} /> : <Authentication />}
    </div>
  );
}

export default App;
