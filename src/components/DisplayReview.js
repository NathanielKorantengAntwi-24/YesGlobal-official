import React from 'react';
import Review from './Review';
import './DisplayReview.css'

function DisplayReview() {
  return (
      <div className=' back container-fluid'>
          <div className='title'>
          <h2>our Reviews</h2>
          <div className='underline'></div>
        </div>
          <div className='row'>
              <div className='col-lg col-md col-sm col-xs'>
              </div> 
              <div className=' col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                  <Review/>
              </div> 
              <div className='col-lg col-md col-sm col-xs'>
              </div>  
      </div>
    </div>
  );
}

export default DisplayReview;
