import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      navigate('/dashboard');  // Redireciona para a tela de dashboards
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
              <label>
                <input type="checkbox" /> <span>Lembrar senha</span>
              </label>
              <a href="#forgot-password">Recuperar senha</a>
            </div>
            <button type="submit" className="login-btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
