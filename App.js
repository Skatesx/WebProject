import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import './index.css';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <EventDetails />
      <Registration />
    </div>
  );
}

export default App;
