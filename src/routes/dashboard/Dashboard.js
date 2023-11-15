// src/routes/dashboard/Dashboard.js
import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
