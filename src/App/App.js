import React from 'react';
import './App.scss';

import { Header, Subheader } from '../components';

import Routes from '../routes';

function App() {
  return (
    <div className="App default-theme">
      <Header />
      <Subheader />
      <Routes />
    </div>
  );
}

export default App;
