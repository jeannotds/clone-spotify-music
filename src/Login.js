import './Login.css'
import { loginUrl } from './Spotify'


function Login(){


    return(
        <div className='login'>
            <h1>The Login Page</h1>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            {/*  Spotify logo  */}
            {/* Login with spotify botton */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login