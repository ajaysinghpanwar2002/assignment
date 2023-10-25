// Sidebar.jsx
import React from 'react';
import './SideBar.css';
import {DashboardIcon, SkillIcon, InternshipIcon} from './images'

function SidebarItem({ icon, label, highlight }) {
    return (
        <div className={`SideBar-body-items${highlight ? ' Highlight' : ''}`}>
            <img src={icon} alt={label} />
            <span className={`SideBar-skillName${highlight ? ' SkillTest-color' : ''}`}>{label}</span>
        </div>
    );
}

function SideBar() {
    return (
        <div className='SideBar-body'>
            <SidebarItem icon={DashboardIcon} label="Dashboard" />
            <SidebarItem icon={SkillIcon} label="Skill Test" highlight />
            <SidebarItem icon={InternshipIcon} label="Internships" />
        </div>
    );
}

export default SideBar;
