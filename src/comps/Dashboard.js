import React from 'react';
import'./css/dashboard.css';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import RightContainer from './RightContainer';


const Dashboard = () =>{
    return(
        <div className = "dashboard">
            <div className = "left__container"><LeftContainer /></div>
            <div className = "main__container"><MainContainer /></div>
            <div className = "right__container"><RightContainer /></div>
            
        </div>
    )
}

export default Dashboard;