import React from 'react';
import './css/writingForCard.css';
import {MdKeyboardArrowRight} from 'react-icons/md'

const WritingForCard = () => {
    return (
        <div className = "writing-for-card-wrapper">
            <div className = "writing-for-card">
                <h2>Writing for</h2>
                <div className = "card_wrapper">
                    <img src = "https://cdn.pixabay.com/photo/2016/12/17/17/44/presents-1913987_960_720.jpg" alt = "" />
                    <div className = "company__info">
                        <p>LifeStyle Magazine</p>
                        <label>fashion, art</label>

                    </div>

                </div>

                <div className = "card_wrapper">
                    <img src = "https://cdn.pixabay.com/photo/2021/05/23/05/02/origami-6275164_960_720.jpg" alt = "" />
                    <div className = "company__info">
                        <p>Forbes</p>
                        <label>finance, social</label>

                    </div>

                </div>


                <div className = "card_wrapper">
                    <img src = "https://cdn.pixabay.com/photo/2021/06/04/06/24/orange-6308917_960_720.jpg" alt = "" />
                    <div className = "company__info">
                        <p>Verge</p>
                        <label>tech, finance</label>

                    </div>

                </div>
                
            </div>
            <button>VIEW PROFILE <MdKeyboardArrowRight className = "right-arrow" /></button>
        </div>
    )
}

export default WritingForCard
