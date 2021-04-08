import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';
import { storage } from '../../utils/storage';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function LoginPage() {
  const { login, authenticated } = useAuth();
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);
  const [showFail, setShowFail] = useState(false);

  useEffect(() => {
    setShowFail(!authenticated);
  }, [authenticated]);

  function authenticate(event) {
    event.preventDefault();
    login(username.current.value, password.current.value);
    storage.set('favorites', {});
  }

  return (
    <Card className="container-card" variant="outlined">
      <CardContent>
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
          <br />
          <div style={{ visibility: showFail ? 'visible' : 'hidden' }}>
            {' '}
            Username / Password combination is not correct
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
