import React from 'react'
import Logo from './SidebarComponents/Logo'
import NavBar from './SidebarComponents/NavBar'
import './SidebarComponents/Sidebar.css'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <Logo/>
            <NavBar/>
        </div>
    )
}

export default Sidebar
