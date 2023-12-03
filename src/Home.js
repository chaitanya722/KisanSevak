import React, { useState } from 'react';
import logo from './Picture1.png';

function WelcomeScreen({ onStartClick }) {
  const welcomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Light gray background
  };

  const startButtonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#006400', // Dark green button color
    color: '#fff', // White button text color
    cursor: 'pointer',
  };

  return (
    <div style={welcomeStyle}>
      <h1>Welcome to Kisan Sevak</h1>
      <button style={startButtonStyle} onClick={onStartClick}>
        Start
      </button>
    </div>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const onStartClick = () => {
    setShowWelcome(false);
  };

  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
    flex: '1',
    backgroundColor: '#ddd',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centered the items
    justifyContent: 'flex-start',
  };

  const rightSideStyle = {
    flex: '3',
    backgroundColor: '#fff',
    padding: '20px',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '150px',
  };

  const logoStyle = {
    width: 'auto',
    height: '180px',
    overflow: 'hidden',
    marginBottom: '30px',
  };

  const textStyle = {
    color: '#000',
    fontSize: '75px',
    fontFamily: 'sans-serif',
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    textAlign: 'center',
    fontWeight: 'normal',
    transition: 'font-size 0.3s',
    cursor: 'pointer',
  };

  const optionsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align option text to the left
    marginTop: '30px', // Adjusted margin to close the gap
  };

  const optionStyle = {
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '40px',
    transition: 'transform 0.3s, font-size 0.3s, color 0.3s', // Corrected the typo here
    cursor: 'pointer',
  };

  const optionHoverStyle = {
    fontSize: '26px',
    color: '#006400', // Dark green color when hovered
  };

  return (
    <div className="App" style={containerStyle}>
      {showWelcome ? (
        <WelcomeScreen onStartClick={onStartClick} />
      ) : (
        <>
          <div
            style={leftSideStyle}
            onMouseEnter={() => setShowWelcome(true)}
          >
            <img src={logo} alt="Logo" style={logoStyle} />
            <div style={optionsContainerStyle}>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption1Hovered && optionHoverStyle),
                }}
                onMouseEnter={() => setIsOption1Hovered(true)}
                onMouseLeave={() => setIsOption1Hovered(false)}
              >
                Option 1
              </div>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption2Hovered && optionHoverStyle),
                }}
                onMouseEnter={() => setIsOption2Hovered(true)}
                onMouseLeave={() => setIsOption2Hovered(false)}
              >
                Option 2
              </div>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption3Hovered && optionHoverStyle),
                }}
                onMouseEnter={() => setIsOption3Hovered(true)}
                onMouseLeave={() => setIsOption3Hovered(false)}
              >
                Option 3
              </div>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption4Hovered && optionHoverStyle),
                }}
                }}
                onMouseEnter={() => setIsOption4Hovered(true)}
                onMouseLeave={() => setIsOption4Hovered(false)}
              >
                Option 4
              </div>
            </div>
          </div>
          <div style={rightSideStyle}>
            <div style={overlayStyle}></div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
