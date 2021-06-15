import React from 'react';
import './css/rightContainer.css';
import {VscBellDot} from 'react-icons/vsc'
// import {VscBell} from 'reacts-icons/vs'
import {RiSettingsLine} from 'react-icons/ri';
import img1 from './img/img.PNG'

import {BsPeople} from 'react-icons/bs';
import {RiArticleLine} from 'react-icons/ri'
import {AiOutlineStar} from 'react-icons/ai'

import WritingForCard from './WritingForCard';






const RightContainer = () => {
    return (
        <div className = "right-container">
            <div className = 'bell__geaer__wrapper'>
                <VscBellDot className = "bell"/>
                <RiSettingsLine className = "gear" />
            </div>

            <div className = "writer__info">
                <img src = {img1} alt = "" />
                <h3>Tulsi White</h3>
                <label>Writer</label>
            </div>

            {/* followers info */}
            <div className = "followers_info">

                <div className = "followers">
                    <BsPeople className = "followers-logo" />
                    <h3>19k followers</h3>
                </div>

                <div className = "articles">
                    <RiArticleLine className = "articles-logo" />
                    <h3>220 articles</h3>
                </div>
                
                <div className = "following">
                    <AiOutlineStar className = "following-logo" />
                    <h3>57 following</h3>
                </div>

            </div>

            <WritingForCard />
            




        </div>
    )
}

export default RightContainer
