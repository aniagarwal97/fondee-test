import React from 'react';
import Header from './Components/Header';
import Dashboard from './Containers/Dashboard';
import './App.scss';
// import DarkBackground from './assets/Group 562.svg';
// import LightPlus from './assets/light_plus.svg';
function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
