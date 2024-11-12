import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/auth/login', formData);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
