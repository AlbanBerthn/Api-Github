// == Import : npm
import PropTypes from 'prop-types';


// == Import : local
import './reposResults.scss';
import Card  from '../Card';

// == Composant
function ReposResults({ results }) {
  // console.log(results);
  return (
    <div className='result'>
      {
        // On nettoie bien la donnée en amont, on recup donc que les données dont on a besoin
        results.map((repo) => <Card key={`repo-${repo.id}`} {...repo} />)
      }
    </div>
  );
}

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default ReposResults;