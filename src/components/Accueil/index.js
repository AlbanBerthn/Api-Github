// == Import: npm


// == Import: local
import './accueil.scss';


// == Composant
function Accueil() {
  return (
    <div className="accueil">
      <h1 className="accueil__title"> Github API </h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

// == Export
export default Accueil;