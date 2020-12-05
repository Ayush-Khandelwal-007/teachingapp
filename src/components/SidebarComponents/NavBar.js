import React from 'react'
import { FaPencilRuler, FaMapMarkerAlt } from 'react-icons/fa';
import { GiBrain, GiMedicines, GiPapers } from 'react-icons/gi';
import { MdAssignment } from 'react-icons/md';
import { BsFunnelFill } from 'react-icons/bs';
import { RiFilePaperFill } from 'react-icons/ri';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='ToolHeading'><span className='ToolLogo'><FaPencilRuler size='1.3em' /></span>Tools</div>
            <div className='ToolList'>
                <ul className="NavList">
                    <li><DashboardIcon /> Dashboard</li>
                    <li><EmojiPeopleIcon /> Mentorship</li>
                    <li><GiBrain /> Doubt Resolver</li>
                    <li><GiMedicines /> Remedies</li>
                    <li><MdAssignment /> Assignment Creator</li>
                    <li><FaMapMarkerAlt /> Tracking Tool</li>
                    <li id="Active"> <GiPapers /> Backlog Remover</li>
                    <li><BsFunnelFill /> Material Sorter</li>
                    <li><RiFilePaperFill /> Test Creator</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
