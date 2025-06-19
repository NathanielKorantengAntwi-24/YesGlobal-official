import React from 'react';
import Slider from '../components/Slider';
import Accodian from '../components/Accodian'
import DisplayReview from '../components/DisplayReview';
import Footer from '../components/Footer';
import './Home.css'

function Home({ posts }) {
  return (
    <div>
      <Slider />
      <Accodian />
      <DisplayReview />
      <div className="home-container">
        <h3>Latest News</h3>
        <ul className="home-posts-list">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <li key={index} className="home-post-item">
                <strong>{post.title}</strong> - {post.date}
                <p>{post.body}</p>
              </li>
            ))
          ) : (
            <p>No News Available</p>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
