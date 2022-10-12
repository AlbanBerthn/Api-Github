// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './message.scss';

// == Composant
function Message({ nbResults }) {
  return (
    <div className='message'>
      <p className='message_paragraphe'>La recherche à donnée {nbResults} résultats</p>
    </div>
  );
}

Message.propTypes = {
  nbResults: PropTypes.number.isRequired,
};

// == Export
export default Message;