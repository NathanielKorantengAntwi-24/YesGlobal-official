import React from 'react';
import "../components/Information.css"
import signature from '../signature.png';

function Information({ posts = [] }) {
  return (
    <div className="about1">
      <div>

        <div>
          <ul>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <li key={index}>
                 <div>
                   <h3 className="title text-dark">{post.title} </h3> 
                  <div className="underline"></div>
                 </div>
                 <div className=' text-center'>
                   - <small className='text-muted' >Updated on: </small> <i>{post.date}</i>
                 </div>
                  <div>
                    <p>{post.body}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>No News Available</p>
            )}
          </ul>
        </div>

       <div className='text-center'>
         <img src={signature} className="logo" alt="signature" />
        <h4 className='text-muted'>The YesGlobal Team</h4>
       </div>
        <div className="Blink">
          <h2><a href="/apply">Continue Here</a></h2>
        </div>
      </div>
    </div>
  );
}

export default Information;
