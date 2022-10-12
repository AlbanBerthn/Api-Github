// == Import: npm
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// == Import: local
// Scss
import './accueil.scss';
// Composants
import Nav from '../Nav';
import Faq from '../Faq';
import SearchBar from '../SearchBar';
import Message from '../Message';
import NotFound from '../NotFound';
import ReposResults from '../ReposResults';

// Fonction qui va retourner un tableau de repos,
// contenant uniquement les données utiles
const cleanReposData = (repos) => {
  const cleanedRepos = repos.map((repo) => (
    // La callback va retourner un objet contenant uniquement les infos utiles
    // du repo courant
    {
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      img: repo.owner.avatar_url,
      desc: repo.description,
    }
  ));
  return cleanedRepos;
};

// == Composant
function Accueil() {

  // Champ controllé:
  // - Contrôle en lecture: Lire la donnée courante du State
  // - Contrôle en écriture: Mettre à jour la donnée du State
  // Mise en place d'une variable d'état qui contient la valeur actuelle du champ `input`
  // Par défaut, cette valeur est une chaine de caractère vide
  const [search, setSearch] = useState('');

   // Varibale d'état contenant la liste des repos à afficher
   const [repos, setRepos] = useState([]);

   // Variblable d'état contenant le nb de résultats lié à la recherche
   const [nbRepos, setNbRepos] = useState(0);

   // Fonction qui va se charger de recup les repos depuis l'API
  // et de les mettre dans le state
  const loadRepos = () => {
    // On test le call à l'API avec la query param en dur : react
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        // Quand la promesse est tenue
        // console.log(response.data);
        setRepos(response.data.items);
        setNbRepos(response.data.total_count);
      })
      .catch((error) => {
        // Quand la promesse est rompue
        console.log(error);
      })
      .finally(() => {
        // Quand l'attente de la réponse est passée
        // on vide l'input après la réponse de l'API
        setSearch('');
      });
  };

  return (
    <div className="accueil">
      <h1 className="accueil__title"> Github API </h1>
      <Nav />
      <Routes>
        <Route
            path="/"
            element={(
              <>
                <SearchBar value={search} setValue={setSearch} load={loadRepos} />
                <Message nbResults={nbRepos} />
                <ReposResults results={cleanReposData(repos)} />
              </>
            )}
          />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />}
        />
      </Routes>      
    </div>
  );
}

// == Export
export default Accueil;