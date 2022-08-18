import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login  from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';  

   
// variable special de spotify
const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null) 

  const [{ user, token }, dispatch] = useDataLayerValue();

  /* useEffect : exécuter du code en fonction d'une condition donnée */
  useEffect(()=>{
      const hash = getTokenFromUrl();

      /* 
        Renvoie l'identifiant du fragment (y compris le caractère de hachage) pour la page en cours.
        https://webplatform.github.io/docs/apis/location/hash/
      */
      window.location.hash = "";

      /* jeton d'accès */
      const token = hash.access_token;

      if(token){

        dispatch({
          type: "SET_TOKEN",
            token: token
        })

        // setToken(token);

        spotify.setAccessToken(token);

        //Recuperation des infos de l'utilisateur
        spotify.getMe().then(user => {

          dispatch({
            type: 'SET_USER', 
            user: user,
          }) ;
        });

        spotify.getUserPlaylists().then((playlists)=>{
            dispatch({
                type: "SET_PLAYLISTS",
                playlists: playlists,
            })
        })

      }

      console.log('I HAVE A TOKEN ', token);
  }, []);

  console.log("User : ", user);
  console.log("Token : ", token);


  return (
    <div className="App">

        {

          token ? (
            <Player spotify={spotify} />
          ) : ( 
            <Login />
          )

        }

    </div>
  );
}

export default App;
