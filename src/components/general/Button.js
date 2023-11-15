import React from 'react';
import './general.css'; // Ensure this file exists and has the necessary styles

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`button ${className || ''}`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
