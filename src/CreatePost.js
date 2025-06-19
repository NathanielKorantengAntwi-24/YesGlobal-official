import React, { useState, useEffect } from 'react';
import './CreatePost.css';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from './firebase';

function CreatePost({ setIsAuthenticated }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSave = async () => {
    if (!title.trim() || !body.trim()) {
      alert('Title and Body cannot be empty.');
      return;
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());

    if (editingId) {
      const postRef = doc(db, 'posts', editingId);
      await updateDoc(postRef, { title, body, date: formattedDate });
      setEditingId(null);
    } else {
      await addDoc(collection(db, 'posts'), {
        title,
        body,
        date: formattedDate
      });
    }

    setTitle('');
    setBody('');
    fetchPosts(); // Refresh list
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deleteDoc(doc(db, 'posts', id));
      fetchPosts();
    }
  };

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      await signOut(auth);
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="create-input"
        aria-label="Post Title"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="create-textarea"
        aria-label="Post Body"
      />
      <button className="create-button" onClick={handleSave}>
        {editingId ? 'Update Post' : 'Create Post'}
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <h3>Existing Posts</h3>
      {posts.length > 0 ? (
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <strong>{post.title}</strong> - {post.date}
              <p>{post.body}</p>
              <button className="edit-button" onClick={() => handleEdit(post)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default CreatePost;
