import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/auth/signup', formData);
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
