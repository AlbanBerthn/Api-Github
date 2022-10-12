// == Import: npm
import { NavLink } from 'react-router-dom';

// == Import: local
import './nav.scss';

// == Composant

function Navbar() {

  return (
    <nav className="navbar" >
      <ul className="navbar__links">
        <li className="navbar__item" ><NavLink className="navbar__link" to="/">Accueil</NavLink></li>
        <li className="navbar__item" ><NavLink className="navbar__link" to="/FAQ">FAQ</NavLink></li>
      </ul>
    </nav>
  )
}

// == Export
export default Navbar;