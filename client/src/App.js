import React from 'react';
import './App.css';
import HealthAppContainer from './containers/HealthAppContainer';
import ServicesContainer from './containers/ServicesContainer';

function App() {
  return (
    <div className="App">
      <HealthAppContainer />
      <ServicesContainer />
    </div>
  );
}

export default App;
