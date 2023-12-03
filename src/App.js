// App.js
import React, { useState } from 'react';
import WelcomeScreen from './Welcome';
import logo from './Picture1.png';

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleStartClick = () => {
    setShowWelcomeScreen(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isOption1Hovered, setIsOption1Hovered] = useState(false);
  const [isOption2Hovered, setIsOption2Hovered] = useState(false);
  const [isOption3Hovered, setIsOption3Hovered] = useState(false);
  const [isOption4Hovered, setIsOption4Hovered] = useState(false);

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
    boxShadow: isHovered ? '0 0 10px rgba(0, 128, 0, 0.3)' : 'none',
    transition: 'transform 0.3s',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
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
    alignItems: 'flex-start',
    marginTop: '30px',
  };

  const optionStyle = {
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '40px',
    transition: 'transform 0.3s, font-size 0.3s, color 0.3s',
    cursor: 'pointer',
  };

  const optionHoverStyle = {
    fontSize: '26px',
    color: '#006400',
  };

  return (
    <div className="App">
      {showWelcomeScreen ? (
        <WelcomeScreen onStartClick={handleStartClick} />
      ) : (
        <div className="App" style={containerStyle}>
          <div
            style={leftSideStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                Home
              </div>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption2Hovered && optionHoverStyle),
                }}
                onMouseEnter={() => setIsOption2Hovered(true)}
                onMouseLeave={() => setIsOption2Hovered(false)}
              >
                Dashboard
              </div>
              <div
                style={{
                  ...optionStyle,
                  ...(isOption3Hovered && optionHoverStyle),
                }}
                onMouseEnter={() => setIsOption3Hovered(true)}
                onMouseLeave={() => setIsOption3Hovered(false)}
              >
                About Us
              </div>
              <div
  style={{
    ...optionStyle,
    ...(isOption4Hovered && optionHoverStyle),
  }}
  onMouseEnter={() => setIsOption4Hovered(true)}
  onMouseLeave={() => setIsOption4Hovered(false)}
>
  Contact Us
</div>

            </div>
          </div>
          <div style={rightSideStyle}>
            <div style={overlayStyle}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;