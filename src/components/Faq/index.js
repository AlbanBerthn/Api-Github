// == Import: npm

// == Import: local
import './faq.scss';

// == Composant
function Faq() {
  return (
    <div className='faq'>
      <h2 className='faq__title'>FAQ</h2>

      <h3 className='faq__title'>A quoi ça sert ?</h3>
      <p className='faq__texte'>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>

      <h3 className='faq__title'>Comment faire une recherche ?</h3>
      <p className='faq__texte'>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>

      <h3 className='faq__title'>Puis-je chercher n'importe quel terme ?</h3>
      <p className='faq__texte'>Oui, c'est fou.</p>

    </div>
      
    
  );
}

// == Export
export default Faq;