import React from 'react';
import Header from '../Header';

function Layout({ children }) {
  return (
    <main className="container">
      <Header />
      {children}
    </main>
  );
}

export default Layout;
