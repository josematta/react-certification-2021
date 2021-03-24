import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';
import { storage } from '../../utils/storage';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);
  function authenticate(event) {
    event.preventDefault();
    login(username.current.value, password.current.value);
    storage.set('favorites', {});
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" ref={username} id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" ref={password} id="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
