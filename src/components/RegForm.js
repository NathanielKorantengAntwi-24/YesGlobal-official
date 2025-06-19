import React, { useState } from 'react';
import Modal from '../components/Modal.js';
import './FormR.css';
import Submit from './Submit.js';
import { db } from '../firebase'; // 🔥 Firebase import
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Firestore functions

const RegForm = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ firstName: '', email: '', age: '', phone: '', program: '', subject: '', country: '' });
  const [showModal, setShowModal] = useState(false);
  const [showSubmit, setShowSubmit] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, age, phone, program, subject, country } = person;

    if (firstName && email && age && phone && program && subject && country) {
      try {
        // 🔥 Add to Firestore
        await addDoc(collection(db, 'registrations'), {
          ...person,
          timestamp: Timestamp.now()
        });

        setShowSubmit(true);
        setTimeout(() => setShowSubmit(false), 7000);

        setPeople([...people, { ...person, id: new Date().getTime().toString() }]);
        setPerson({ firstName: '', email: '', age: '', phone: '', program: '', subject: '', country: '' });
        setShowModal(false);
      } catch (error) {
        alert("Oops! Something went wrong while submitting.");
        console.error(error);
      }
    } else {
      setShowModal(true);
    }
  };

  const resetdata = () => {
    setPerson({ firstName: '', email: '', age: '', phone: '', program: '', subject: '', country: '' });
  };

  return (
    <div className='container1 mt-5'>
      <article>
        <div className='title'>
          <h2>Book Apointment</h2>
          <div className='underline'></div>
        </div>

        {showModal && <Modal />}
        {showSubmit && <Submit />}

        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Full Name:</label>
            <input type='text' id='firstName' name='firstName' placeholder="Enter your full name" value={person.firstName} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age:</label>
            <input type='number' id='age' name='age' placeholder="Enter your age" value={person.age} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' id='phone' name='phone' placeholder="Eg: +91 55766****" value={person.phone} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input type="email" id='email' name='email' placeholder="Enter your email" value={person.email} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='country'>Nationality:</label>
            <input type="text" id='country' name='country' placeholder="Enter your country" value={person.country} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='program'>Interested Program:</label>
            <input type='text' id='program' name='program' placeholder="Eg: BSc. Computer Science" value={person.program} onChange={handleChange} />
          </div>

          <div className="mb-3 form-control">
            <label htmlFor="subject">Comment:</label>
            <textarea name='subject' id="subject" rows="3" placeholder="Type your comment..." value={person.subject} onChange={handleChange}></textarea>
          </div>

          <button type='submit'>Submit</button>
          &nbsp;&nbsp;
          <button type='reset' onClick={resetdata}>Clear</button>
        </form>
      </article>
    </div>
  );
};

export default RegForm;
