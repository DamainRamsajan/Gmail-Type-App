import React from 'react'
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications"


function Header() {
    return (
        <div className = "header">
            <div className= "header__left">
               <IconButton>
                   <MenuIcon />
               </IconButton>
               <img src="./images/logo.png" alt = "" />
            </div>
            <div className= "header__middle">
                <SearchIcon/>
                <input placeholder = "Search Dmail" type = "text" />
                <ArrowDropDownIcon />
            </div>
            <div className= "header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src="/images/beany.jpg" />
            </div>
        </div>
    )
}

export default Header
