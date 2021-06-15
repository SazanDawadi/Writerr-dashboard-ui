import React from 'react'
import './css/blogStatCard.css'

import {BsEye} from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai'

const BlogStatCard = () => {
    return (
        <div>
            <div className = "blog-stat-card">
                <img src = "https://cdn.pixabay.com/photo/2018/01/27/12/35/minimalism-3111110_960_720.jpg" alt = "" />
                <div className = "info__wrapper">
                    <div className= "info">
                        <h3>Ten Ways I approach My Work</h3>
                        <div className= "label_btn_warpper">
                            <button className = "popular">popular</button>
                            <button className = "editor-choice" >editor choice</button>

                        </div>
                    </div>

                    <div className = "date-words-cnt-wrapper">
                        <p>sept 25 2019, &nbsp;  <span>&#9679;</span> &nbsp;   5 min read &nbsp;  <span>&#9679;</span> &nbsp; 3k words</p>
                    </div>


                    <div className = "blog_stats">
                        <p><BsEye className = "card-icons" /> 3k views</p>
                        <p><RiShareForwardLine  className = "card-icons"/> 124 comments</p>
                        <p><AiOutlineHeart className = "card-icons" /> 12k likes</p>
                    </div>
                </div>
                
            </div>



            <div className = "blog-stat-card">
                <img src = "https://cdn.pixabay.com/photo/2018/05/15/21/36/background-3404345_960_720.jpg" alt = "" />
                <div className = "info__wrapper">
                    <div className= "info">
                        <h3>A good strategy is never best</h3>
                        <div className= "label_btn_warpper">
                            <button className = "top-ten-in">Top 10</button>
                            <button className = "editor-choice" >editor choice</button>

                        </div>
                    </div>

                    <div className = "date-words-cnt-wrapper">
                        <p>sept 25 2019, &nbsp;  <span>&#9679;</span> &nbsp;   5 min read &nbsp;  <span>&#9679;</span> &nbsp; 3k words</p>
                    </div>


                    <div className = "blog_stats">
                        <p><BsEye className = "card-icons" /> 3k views</p>
                        <p><RiShareForwardLine  className = "card-icons"/> 124 comments</p>
                        <p><AiOutlineHeart className = "card-icons" /> 12k likes</p>
                    </div>
                </div>
                
            </div>



            <div className = "blog-stat-card">
                <img src = "https://cdn.pixabay.com/photo/2020/04/22/06/47/hydrangea-5076212_960_720.jpg" alt = "" />
                <div className = "info__wrapper">
                    <div className= "info">
                        <h3>Ten Ways I approach My Work</h3>
                        <div className= "label_btn_warpper">
                            <button className = "popular-blue">popular</button>
                            <button className = "most-liked" >most liked</button>

                        </div>
                    </div>

                    <div className = "date-words-cnt-wrapper">
                        <p>sept 25 2019, &nbsp;  <span>&#9679;</span> &nbsp;   5 min read &nbsp;  <span>&#9679;</span> &nbsp; 3k words</p>
                    </div>


                    <div className = "blog_stats">
                        <p><BsEye className = "card-icons" /> 3k views</p>
                        <p><RiShareForwardLine  className = "card-icons"/> 124 comments</p>
                        <p><AiOutlineHeart className = "card-icons" /> 12k likes</p>
                    </div>
                </div>
                
            </div>
        
        
        
            
        </div>
    )
}

export default BlogStatCard
