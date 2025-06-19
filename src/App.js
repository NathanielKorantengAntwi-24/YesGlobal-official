import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navber';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Apply from './pages/Reg';
import Information from './pages/Information';
import PrivacyPolicy from './components/PrivacyPolicy';
import CoursesPage from './NewPage/CouresePage';
import Login from './components/Login';
import CreatePost from './CreatePost';

import { db } from './firebase'; // your firebase config
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = collection(db, 'posts'); // your Firestore collection name
    const q = query(postsRef, orderBy('date', 'desc')); // optional: order by date

    // realtime listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });

    // cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information  posts={posts}/>} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/coursePage" element={<CoursesPage />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/create-post"
          element={
            isAuthenticated ? (
              <CreatePost posts={posts} setPosts={setPosts} setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
