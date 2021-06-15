import React from 'react';
import BlogStatCard from './BlogStatCard';
import Chart from './Chart';
import './css/mainContainer.css'
import HorizontalNav from './HorizontalNav';

const MainContainer = () => {
    return (
        <div className = "main-conatainer">
            <HorizontalNav className = "horizontal__nav" />
            <div className = "graph_container">
                <h3>Statistics of followers</h3>
                <Chart />
            </div>
            <div className = "articles_container">
                <h2>Article Statistics</h2>
                <BlogStatCard />
            </div>
        </div>
    )
}

export default MainContainer
