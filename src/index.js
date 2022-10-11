import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Accueil from './components/Accueil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
);

