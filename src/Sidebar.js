import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add"
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LableImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone"
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

    const dispatch = useDispatch ();

    return (
        <div className = "sidebar">
            <Button 
                startIcon={<AddIcon size = "large" 
                className= "sidebar__compose"
                />} 
                className= "sidebar__compose"
                onClick ={() => dispatch (openSendMessage())}
                
            > 
                Compose
            </Button>

            <SidebarOption  Icon= {InboxIcon} title="inbox" number="44" selected={true}/>
            <SidebarOption  Icon= {StarIcon} title="starred" number="22"/>
            <SidebarOption  Icon= {AccessTimeIcon} title="snoozed" number="11" />
            <SidebarOption  Icon= {LableImportantIcon} title="important" number="44" />
            <SidebarOption  Icon= {NearMeIcon} title="sent" number="33" />
            <SidebarOption  Icon= {NoteIcon} title="drafts" number="55" />
            <SidebarOption  Icon= {ExpandMoreIcon} title="more" number="66" />

            <div className = "sidebar__footer">
                <div className = "sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>

            </div>
        </div>
   
    )
}

export default Sidebar
