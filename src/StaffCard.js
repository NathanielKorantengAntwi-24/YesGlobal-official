import React from 'react';
import './StaffCard.css';

const StaffCard = ({ staff }) => {
    return (
        <div className="staff-card">
            <div className="image-container">
                <img src={staff.picture} alt={staff.name} className="staff-image" />
            </div>
            <h6 className='staffName'>{staff.name}</h6>
            
            <p>
                <strong>WhatsApp:</strong>{' '}
                <a href={`tel:${staff.phone}`} className="contact-link">
                    {staff.phone}
                </a>
            </p>
            <p><strong>{staff.position} </strong> </p>
        </div>
    );
};

export default StaffCard;
