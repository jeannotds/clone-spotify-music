import './Sidebar.css'
import React from 'react'
import SidebarOption from './SidebarOption'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';
import { PlaylistAdd } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <img  className='sidebar__logo'
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" 
        />
        
        <SidebarOption Icon={HouseIcon} title=" Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryBooksIcon} title="Your library" />

        <br/>
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr/>

        <SidebarOption title='Hip hop' />
        <SidebarOption title='Rock' />
        <SidebarOption title='RnB' />

    </div>
  )
}

export default Sidebar