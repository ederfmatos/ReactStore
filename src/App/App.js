import React from 'react';
import './App.scss';

import { Header, Subheader, Footer } from '../components';

import Routes from '../routes';

function App() {
  return (
    <div className="App default-theme">
      <Header />
      <Subheader />

      <div className="app-content">
        <Routes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
