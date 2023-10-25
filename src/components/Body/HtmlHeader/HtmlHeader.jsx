// HtmlHeader.jsx
import React from 'react';
import './HtmlHeader.css';
import { HtmlIcon } from './images';
import MyModal from '../Modal/MyModal';

function LeftSection() {
    return (
        <div className='Html-Header-left'>
            <img src={HtmlIcon} alt='html' />
            <div>
                <div className='Html-Header-heading'>Hypertext Markup Language</div>
                <div className='Html-Header-subheading'>Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021</div>
            </div>
        </div>
    );
}

function HtmlHeader() {
    return (
        <div className='Html-Header-body-main'>
            <div className='Html-Header-body'>
                <LeftSection />
                <div className='Html-Header-right'>
                    <MyModal />
                </div>
            </div>
        </div>
    );
}

export default HtmlHeader;
