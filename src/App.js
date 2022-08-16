import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login  from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';

// variable special de spotify
const spotify = new SpotifyWebApi();

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

        spotify.setAccessToken(token)

        //Recuperation des infos de l'utilisateur
        spotify.getMe().then(user => {
          console.log(user)
          console.log("Utilisateur : " +user.display_name)
        })
      }

      console.log('I HAVE A TOKEN ', token)
  }, [])




  return (
    <div className="App">

        {

          token ? (
            <Player />
          ) : ( 
            <Login />
          )

        }

    </div>
  );
}

export default App;
