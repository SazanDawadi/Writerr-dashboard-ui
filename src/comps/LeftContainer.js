import React from 'react';
import './css/leftContainer.css';
import {IoPersonOutline, } from 'react-icons/io5';
import {IoAnalyticsOutline} from 'react-icons/io5'
import {AiOutlineFire} from "react-icons/ai";
// HiFire
import {GoHome} from "react-icons/go";

const LeftContainer = () => {
    return (
        <div className = "left-container">
            <div className = "logo__container"><p>writerr</p></div>
            <div className = "vertical__nav__wrapper">
                <div className = "vertical__nav__container">
                    <GoHome className = "home__icon" />
                    <IoAnalyticsOutline className = "analytics__icon" />
                    <AiOutlineFire className = "trending__icon" />
                    <IoPersonOutline className = "profile__icon" />
                </div>
            </div>
            
        </div>
    )
}

export default LeftContainer
