import React from 'react';
import './auth.css';
import Input from '../../components/general/Input'; // Adjust the path as needed
import Button from '../../components/general/Button'; // Adjust the path as needed

const Login = ({ username, password, setUsername, setPassword }) => {
  // Implement the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login process
  };

  return (
    <>
      <Input label="Username" value={username} setValue={setUsername} />
      <Input label="Password" type="password" value={password} setValue={setPassword} />
      <Button label="Sign In" onClick={handleSubmit} />
    </>
  );
};

export default Login;
