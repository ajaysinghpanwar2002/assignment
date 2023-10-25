// Header.jsx
import React from 'react';
import './Header.css';
import { logo, userIcon } from './images';

function ProfileCard() {
    return (
        <div className='Profile-card'>
            <img src={userIcon} alt="user-icon" />
            <span className='Profile-name'>Siddharth Jain</span>
        </div>
    );
}

function Header() {
    return (
        <header className='Header'>
            <div className='Header-body'>
                <img src={logo} alt="Cuvette" />
                <ProfileCard />
            </div>
        </header>
    );
}

export default Header;
