// WelcomeScreen.js
import React from 'react';
import logo from './Picture1.png'; // Replace with your actual logo image

const WelcomeScreen = ({ onStartClick }) => {
  const welcomeStyle = {
    backgroundColor: '#488C20', // Green background color
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color
  };

  const startButtonStyle = {
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '#600',
    color: '#0000ff',
  };

  const logoStyle = {
    width: '250px', // Adjust the width as needed
    height: 'auto',
    marginBottom: '20px', // Add spacing between logo and text
  };

  return (
    <div style={welcomeStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div>
        <h1>Welcome to the KisanSevak</h1>
        <button style={startButtonStyle} onClick={onStartClick}>
          Click here to continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
