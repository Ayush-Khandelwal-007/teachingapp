import React from 'react'
import ActivityAndToolBar from './HeaderComponents/ActivityAndToolBar'
import Logo from './HeaderComponents/Logo'
import ProfileMenu from './HeaderComponents/ProfileMenu'
import SearchBar from './HeaderComponents/SearchBar'
import './HeaderComponents/Header.css'

function Header() {
    return (
        <div className="Header">
            <Logo/>
            <ActivityAndToolBar/>
            <SearchBar/>
            <ProfileMenu/>
        </div>
    )
}

export default Header
