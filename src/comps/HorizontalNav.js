import React, { useState } from 'react';
import './css/horizontalNav.css';
import {AiOutlinePlus} from 'react-icons/ai';

const HorizontalNav = () => {
    const [activeLink, setActiveLink] = useState(0)
    return (
        <div className = "horizontal_nav_wrapper">
            <div className = "horizontal_nav">
                <span className = {activeLink ===0?'active':''} onClick = {() => setActiveLink(0)}>Overview</span>

                <span className = {activeLink ===1?'active':''} onClick = {() => setActiveLink(1)}>Analytics</span>

                <span className = {activeLink ===2?'active':''} onClick = {() => setActiveLink(2)}>Followers</span>

                <span className = {activeLink ===3?'active':''} onClick = {() => setActiveLink(3)}>History</span>
            </div>
            <button className = "create_article_btn">
                    <AiOutlinePlus className = "plus_icon" />Create Article
            </button>
            
        </div>
    )
}

export default HorizontalNav
