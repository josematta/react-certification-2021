import React, { useState, useEffect, useContext, useCallback } from 'react';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { auth } from '../../firebase';
import { useHistory } from 'react-router';
const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
        history.push('/');
      })
      .catch((error) => {
        setAuthenticated(false);
        console.log(error);
        // ..
      });
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
