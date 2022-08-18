import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import footer from './Footer'
import Footer from './Footer'

function Player({ spotify }){

    return(
        <div className='player'>
            <div className='player__body'>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player