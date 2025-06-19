import React from 'react';
import CookiesAndPrivacy from './CookiesAndPrivacy';
import './Footer.css'
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <div>
    <section className="container-fluid text-center">
      <div className="row gg">
        <hr/>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs">
          <h4>Follow us</h4>
          <ul>
            <li><a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61577259176497&viewas=100000686899395" target="_blank">Facebook</a></li>
            <li><a rel="noopener noreferrer" href= "https://www.linkedin.com/company/yesglobal-consult/?viewAsMember=true" target="_blank">LinkedIn</a></li>
              <li><a rel="noopener noreferrer" href="https://www.instagram.com/nathanielna46/" target="_blank">Instagram</a></li> 
              <li><a rel="noopener noreferrer" href="https://www.youtube.com/@YesGlobal_Consult" target="_blank">YouTube</a></li> 
          </ul>
          
        </div>
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs">
          <h4>Support</h4>
           <ul>
           <li><a href="/Apply">Contact us</a></li>
              <li><a rel="noopener noreferrer" href="https://chatwith.io/s/nath-tech-world" target="_blank" >Whatsapp</a></li>
              <li><a href="mailto:services.yesglobal@gmail.com">Email</a></li>
          </ul>
        </div>
         <div className="col-lg-3 col-md-3 col-sm-3 col-xs">
          <h4>Resources</h4>
           <ul>
           <li><a href="/about">About Us</a></li>
            <li><a href="/information">Notification</a></li>
            <li><a href="/programmes">Programs</a></li>
          </ul>
          </div>
           <div className="col-lg-3 col-md-3 col-sm-3 col-xs">
          
            <div className='Blink'>
              <h2><a href="/Apply">Apply Now</a></h2>
            </div>
           
        </div>
          <p className='text-center mt-5'>&copy; {currentYear} YesGlobal. All rights reserved.</p>
        </div>
    </section>
    <CookiesAndPrivacy/>
    </div>
  );
}

export default Footer;
