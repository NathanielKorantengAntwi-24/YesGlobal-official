import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.text}>
        Welcome to our Privacy Policy page. Your privacy is critically important to us. This policy outlines the information we collect, how we use it, and the choices you have regarding your data.
      </p>
      
      <h2 style={styles.subheading}>Information We Collect</h2>
      <p style={styles.text}>
        We collect information in the following ways:
      </p>
      <ul style={styles.list}>
        <li>Information you provide directly, such as when you register or fill out forms.</li>
        <li>Automatically collected information, such as your IP address, browser type, and pages visited.</li>
        <li>Cookies to enhance your experience and analyze site usage.</li>
      </ul>

      <h2 style={styles.subheading}>How We Use Your Information</h2>
      <p style={styles.text}>
        The information we collect is used to:
      </p>
      <ul style={styles.list}>
        <li>Provide, operate, and maintain our website.</li>
        <li>Improve your experience and customize content.</li>
        <li>Understand how users interact with our site.</li>
        <li>Communicate updates or promotional offers.</li>
      </ul>

      <h2 style={styles.subheading}>Your Data Choices</h2>
      <p style={styles.text}>
        You have control over your data. You can:
      </p>
      <ul style={styles.list}>
        <li>Access, update, or delete the information we have on you.</li>
        <li>Opt out of marketing communications.</li>
        <li>Adjust your cookie preferences in your browser.</li>
      </ul>

      <h2 style={styles.subheading}>Contact Us</h2>
      <p style={styles.text}>
        If you have any questions about our Privacy Policy or data practices, feel free to contact us at <a href="mailto:services.yesglobal@gmail.com" style={styles.link}>services.yesglobal@gmail.com</a>.
      </p>

      <p style={styles.text}>
        Effective Date: December 3, 2024
      </p>
     <a href= "/" >  <button type="button"  style={styles.back}>Back </button> </a>
    </div>
  );
};

const styles = {
  container: {
    background: 'darkgrey',
    padding: '20px',
    maxWidth: '1000px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: 'white',
  },
  heading: {
    textAlign: 'center',
    color: 'whitesmoke',
    marginTop: '7rem',
  },
  subheading: {
    marginTop: '20px',
    color: 'black',
  },
  text: {
    marginBottom: '15px',
    color:'black'
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color:'black'
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
  back: {
    padding:'5px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width:'5rem',
    background:'whitesmoke',
    color:'green',
    borderRadius:'20%'
  },
 
};

export default PrivacyPolicy;
