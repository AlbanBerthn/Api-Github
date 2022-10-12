// == Import: local
import './notfound.scss';

// == Composant
function NotFound() {
  return (
    <div className="err404">
      <h1 className="err404__title">404</h1>
      <p className="err404__text">Vous êtes perdu ?</p>
    </div>
  );
}

// == Export
export default NotFound;