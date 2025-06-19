import React from 'react';
import '../Ab.css'
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import StaffList from '../StaffList';


function About() {
  
  return (
    <div className='BBc'>
         <Slider/>

       <div className="Ab">
      <header className="Ab-header">
        <h3>Vision | Mission | Values</h3>
        <div className="contento">
          <Section  title="Vision" content="To be the global leader in helping students achieve their dreams of studying abroad." />
          <Section title="Mission" content="YesGlobal supports students in securing admissions, funding, and guidance for studying abroad, empowering them to succeed." />
          <Section title="Values" content="Student-Centric, Integrity, Collaboration, Excellence andf Empowerment" />
        </div>
      </header>

     <div className='staffo' style={{backgroundColor:'whitesmoke'}}>
      <h3 style={{padding:'2rem'}}> Staff</h3>
      <StaffList />
     </div>
    </div>
     
       
      <Footer/>
    </div>
  );
}

const Section = ({ title, content }) => {
  return (
    <div className="sectiono">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default About;

