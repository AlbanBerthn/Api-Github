// == Import: npm
import PropTypes from 'prop-types';
// == Import: local
import './searchBar.scss';

// == Composant
function searchBar({value, setValue, load}) {
  // Fonction qui gere la soumission du formulaire
  function handleSubmit(evt){
    // on empeche le rechargement de la page à la soumission du formulaire
    evt.preventDefault();
    // on appel l'api afin qu'elle affiche les repos contenant le mot clé taper dans le champ de recherche
    load();
  }
  return (
    <form className='search' onSubmit={handleSubmit}>
      <input 
      type="text"
      className='search__input'
      placeholder="Saisissez votre recherche"
      value={value}
      onChange={(event) => {
        // on vient mettre à jour la valeur dans le state
        setValue(event.target.value);
      }}/>
    </form>
  )
}

searchBar.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
};

// == Export
export default searchBar;