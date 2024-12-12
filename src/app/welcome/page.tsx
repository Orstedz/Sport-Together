import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageContainer}>
      {/* Top Navigation */}
      <div style={styles.navBar}>
        <button style={styles.navButton} onClick={() => navigate('/login')}>Home</button>
        <button style={styles.navButton}>About</button>
        <button style={styles.navButton}>Contact</button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          {/* Image Section */}
          <div style={styles.imageContainer}>
            <img
              src="https://i.etsystatic.com/isla/c99b5d/60995380/isla_500x500.60995380_7htk44zi.jpg?version=0" // Replace with your image URL
              alt="Sport Event"
              style={styles.mainImage}
            />
            <div style={styles.imageIcon}>
              🌐 {/* Replace with an actual globe icon */}
            </div>
          </div>

          {/* Text Section */}
          <div style={styles.textContainer}>
            <h1 style={styles.title}>
              <span style={styles.subtitle}>
                Welcome To
              </span>
              <br />
              Sport Booking Service
            </h1>
            <p style={styles.description}>
              Book a sports court, connect players, and more.
            </p>
            <button style={styles.exploreButton} onClick={() => navigate('/login')}>
              Explore now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>www.sporttogether.com</p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Arial', sans-serif",
    color: '#fff',
    backgroundColor: '#004d40', // Match the green shade
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column' as const,
  },
  navBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px',
    gap: '5px',
  },
  navButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    justifyContent: 'center',
    padding: '15px',
    gap: '15px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center', // Center the logo and text together horizontally
    alignItems: 'center', // Vertically center the logo and text
    //flexDirection: 'row', // Place logo and text horizontally
    gap: '20px', // Space between the logo and the text
    padding: '0 50px',
    flex: 1, // Take up available space
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px', // Controls the space between the image and text
  },
  imageContainer: {
    position: 'relative' as const,
    display: 'inline-block',
    marginLeft: '150px', // Add space to the left of the logo
    width: '350px', // Maintain your custom size
    height: '350px',
  },
  mainImage: {
    borderRadius: '50%',
    width: '100%', // Make image fill the container
    height: '100%', // Ensure the image stretches to fill the container
    objectFit: 'cover', // Ensures the image covers the container without distortion
    border: '12px solid #00897b', // Match the border color
  },
  imageIcon: {
    position: 'absolute' as const,
    bottom: '-10px',  // Move further down from the container's bottom
    left: '-10px',    // Move further to the left
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '150px',    // Icon size
    height: '150px',   // Same as width to keep it circular
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',  // Increase font size for the icon
    color: '#00897b',
  } as React.CSSProperties,
  textContainer: {
    maxWidth: '600px', // Limit the width of the text container
    textAlign: 'left', // Align the text (subtitle, title, and description) to the left
  },
  title: {
    fontSize: '64px', // Increased from 48px
    lineHeight: '1.2',
    fontWeight: 'bold' as const,
    margin: 0,
  },
  subtitle: {
    fontSize: '32px', // Increased from 24px
    color: '#00897b',
    display: 'inline-block',
    backgroundColor: '#fff',
    padding: '10px 15px', // Adjust padding to match new size
    borderRadius: '10px',
    margin: 0,
  },
  description: {
    marginTop: '10px',
    fontSize: '24px', // Increased from 18px
    color: '#d4e157',
  },
  exploreButton: {
    marginTop: '20px',
    padding: '15px 30px',
    fontSize: '20px', // Increased from 16px
    backgroundColor: '#00c853',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: '#00332b',
    marginTop: 'auto', // Push footer to the bottom
  },
};

export default WelcomePage;
