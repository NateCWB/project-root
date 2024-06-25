import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h2>BEM VINDO!</h2>
        </div>
        <div className="login-right">
          <h2>FAÇA LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="options">
              <div className="remember-me">
                <label>
                  <input type="checkbox" /> Lembrar senha
                </label>
              </div>
              <div className="forgot-password">
                <a href="#forgot-password">Recuperar senha</a>
              </div>
            </div>
            <button type="submit" className="login-btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
