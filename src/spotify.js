// https:developper.spotify.com
// documentation/web-playback-sdk/quick-start/# 


export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "087a508674ed424e86ab101bc0ca23ff";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash

    /*
        https://www.youtube.com/watch?v=176JPkG227g
        https://bobbyhadz.com/blog/react-substring-method
    */
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
    
    /*
    // https://fr.acervolima.com/difference-entre-les-fonctions-decodeuricomponent-et-decodeuri-en-javascript/#:~:text=decodeURI()
    %20%3A%20il%20prend%20la,et%20renvoie%20la%20string%20d%C3%A9cod%C3%A9e.
    */
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;

    }, {});
}
 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`