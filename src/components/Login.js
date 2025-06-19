import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // make sure db is exported from your firebase.js

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Check if the user is in the 'admins' collection
    const adminRef = doc(db, "admins", uid);
    const adminSnap = await getDoc(adminRef);

    if (adminSnap.exists()) {
      setIsAuthenticated(true);
    } else {
      alert("Access restricted to admins only.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Invalid email or password.");
  }
};
  return (
    <div className="login-container">
      <h4>Admin Login</h4>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
