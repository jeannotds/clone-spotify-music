import './Sidebar.css'
import React from 'react'
import SidebarOption from './SidebarOption'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <img  className='sidebar__logo'
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" 
        />
        <SidebarOption Icon={LibraryBooksIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={HouseIcon} title="Your library" />

        <br/>

        <strong className='sidebar__title'>PLAYLISTS</strong>

        <hr/>

    </div>
  )
}
 
export default Sidebar