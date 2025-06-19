import React from 'react';
import StaffCard from './StaffCard';
import './StaffList.css';
import Imageceo from './Imageceo.jpg'
import imageaman from './Imageaman.jpg';
import Officer from './Officer.jpg';
import Officer1 from './Officer1.jpg';


const staffData = [
    {
        name: 'Mr.Amuchin Feoley Togba',
        phone: '+231 77 594 0468',
        position: 'Officer-Liberia',
        picture: imageaman
    },
    {
        name: 'Mr.Simon O. Konllatey',
        phone: '+233 55 766 4736',
        position: 'Officer-Ghana',
        picture: Officer1
    },
    {
        name: 'Mr.Thomas Aduhene',
        phone: '+233 59 419 7005',
        position: 'Officer-Ghana',
        picture: Officer
    },
    
   
];

const StaffList = () => {
    return (
        <div className="staff-list">
            {staffData.map((staff, index) => (
                <StaffCard key={index} staff={staff} />
            ))}
        </div>
    );
};

export default StaffList;
