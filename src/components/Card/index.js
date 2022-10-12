// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './card.scss';

// == Composant
function Card({
  name, owner, img, desc,
}) {
  return (
    <div className='card'>
      <div className='card__top'>
        <img className='card__image' src={img} alt="avatar de l'auteur" />
      </div>
      <div className='card__bot'>
        <span className='card__bot--nom'>{name}</span>
        <span className='card__bot--auteur'>{owner}</span>
        <span className='card__bot--description'>{desc}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

// Il se peut qu'on ait des props desc à null
// Pour éviter les warnings en console et pour rendre heureux notre ESLint des familles
// on vient définir une valeur par défaut pour la prop desc !
// https://fr.reactjs.org/docs/react-component.html#defaultprops
Card.defaultProps = {
  desc: '',
};

// == Export
export default Card;