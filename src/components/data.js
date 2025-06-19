import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin,FaPhoneAlt,FaWhatsapp} from 'react-icons/fa';


export const links = [
 
  
  {
    id: 1,
    url: '/about',
    text: 'about',
  },
  {
    id: 2,
    url: '/Information',
    text: 'information',
  },
  {
    id: 3,
    url: '/Programmes',
    text: 'programmes',
  },

  {
    id: 4,
    url: '/coursePage',
    text: <img className='img-fluid' style={{ maxWidth: '17px', height: 'auto' }} src='https://img.icons8.com/?size=100&id=j2ZcLRRa4MkO&format=png&color=000000'/>

  },
 
 {
  id: 5,
  url: 'https://student-app-a21fd.web.app',
  text: (
    <a
      href="https://student-app-a21fd.web.app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Us"
    >
      Apply Now
    </a>
  ),
}
,


  {
    id: 6,
    url: '/Apply',
    text: 'contact us',
  }
  
  
];
export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/EduWorld-101919545888680',
    icon: (
      <a
        href="https://www.facebook.com/profile.php?id=61577259176497&viewas=100000686899395"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    ),
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/aduworld-india-8822b8241/',
    icon: (
      <a
        href="https://www.linkedin.com/company/yesglobal-consult/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    ),
  },
  {
    id: 3,
    url: 'https://www.instagram.com/nathanielna46/',
    icon: (
      <a
        href="https://www.instagram.com/nathanielna46/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    ),
  },
  {
    id: 4,
    url: 'tel:+917696682138',
    icon: (
      <a href="tel:+917696682138" aria-label="Phone">
        <FaPhoneAlt />
      </a>
    ),
  },
  {
    id: 5,
    url: 'https://chatwith.io/s/nath-tech-world',
    icon: (
      <a
        href="https://chatwith.io/s/nath-tech-world"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    ),
  },
];

