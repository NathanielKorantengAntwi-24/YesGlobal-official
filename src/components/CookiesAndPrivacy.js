import React, { useState } from 'react';

const CookiesAndPrivacy = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const handleAccept = () => {
    // Save consent to local storage or a cookie
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handlePreferences = () => {
    setPreferencesOpen(true);
  };

  const handleSavePreferences = () => {
    // Save specific preferences (e.g., analytics, marketing)
    localStorage.setItem('cookiePreferences', JSON.stringify({
      analytics: true,
      marketing: false,
    }));
    setPreferencesOpen(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.container}>
      {!preferencesOpen ? (
        <div>
          <p style={styles.text}>
            We use cookies to enhance your experience. By clicking "Accept", you agree to our use of cookies as described in our <a href="/privacyPolicy" style={styles.link}>Privacy Policy</a>.
          </p>
          <div style={styles.buttonContainer}>
            <button onClick={handleAccept} style={styles.button}>Accept</button>
            <button onClick={handlePreferences} style={styles.button}>Manage Preferences</button>
          </div>
        </div>
      ) : (
        <div>
          <p style={styles.text}>Choose your cookie preferences:</p>
          <div style={styles.preferences}>
            <label>
              <input type="checkbox" defaultChecked disabled />
              Necessary (Always Enabled)
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Analytics
            </label>
            <label>
              <input type="checkbox" />
              Marketing
            </label>
          </div>
          <button onClick={handleSavePreferences} style={styles.button}>Save Preferences</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width:'90%',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'green',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1000,
  },
  text: {
    fontSize: '14px',
    marginBottom: '10px',
    color:'white'
  },
  link: {
    color: 'whitesmoke',
    textDecoration: 'underline',
    
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '8px 12px',
    background: 'violet',
    color: 'black',
    borderLine: '5px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  preferences: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '10px',
  },
};

export default CookiesAndPrivacy;
