import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login  from './Login';
import { getTokenFromUrl } from './Spotify';

function App() {

  const [token, setToken] = useState(null) 

  /* useEffect : exécuter du code en fonction d'une condition donnée */
  useEffect(()=>{
      const hash = getTokenFromUrl();

      /* 
        Renvoie l'identifiant du fragment (y compris le caractère de hachage) pour la page en cours.
        https://webplatform.github.io/docs/apis/location/hash/
      */
      window.location.hash = ""

      /* jeton d'accès */
      const token = hash.access_token;

      if(token){
        setToken(token)
      }

      console.log('I HAVE A TOKEN ', token)
  }, [])




  return (
    <div className="App">

        {

          token ? (
            <h1>I am logged in </h1>
          ) : (
            <Login />
          )

        }

    </div>
  );
}

export default App;
