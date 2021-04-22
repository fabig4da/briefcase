import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/layout/header/Header';
import { Portada } from './components/sections/portada/Portada';
import { Tecnologies } from './components/sections/tecnologies/Tecnologies';
import { Templates } from './components/sections/templates/Templates';


function App() {
  return (
    <Router >
      <Header />
      <div className="app">
        <Portada />
        <Templates />
        <Tecnologies />

      </div>
    </Router>
  );
}

export default App;
