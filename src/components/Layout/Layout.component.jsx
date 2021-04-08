import React from 'react';
import Header from '../Header';

function Layout({ children, onSubmit }) {
  return (
    <main className="container">
      <Header data-testid="layout-header" onSubmit={onSubmit} />
      {children}
    </main>
  );
}

export default Layout;
