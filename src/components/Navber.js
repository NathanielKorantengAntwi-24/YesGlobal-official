import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../Logo.png';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className="fixed-top navb">
      <div className="nav-center">
        <div>
          <Link to="/">
            <img
              src={Logo}
              className="logo"
              alt="logo"
              style={{ cursor: "pointer", width: "40px", height: "auto" }}
            />
          </Link>
        </div>
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={() => setShowLinks(false)}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
              </li>
            );
          })}
        </ul>
       
        {isAuthenticated ? (
          <>
            <Link
              className="nav-link"
              to="/create-post"
              style={{
                color: '#fff',
                padding: '4px 10px',
                backgroundColor: '#4CAF50',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                marginRight: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Post
            </Link>

            <button
              className="logout-button"
              onClick={() => setIsAuthenticated(false)}
              style={{
                padding: '4px 10px',
                backgroundColor: '#f44336',
                border: 'none',
                color: '#fff',
                borderRadius: '3px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                marginLeft: '8px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e53935'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="nav-link hide-on-mobile"
            to="/login"
            style={{
              color: '#fff',
              padding: '4px 10px',
              backgroundColor: '#2196F3',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
          >
            Login
          </Link>
        )}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .hide-on-mobile {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;