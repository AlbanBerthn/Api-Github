// == Import: npm
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// == Import: local
import './styles/index.scss';
import Accueil from './components/Accueil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Accueil />
    </BrowserRouter>    
  </React.StrictMode>
);

