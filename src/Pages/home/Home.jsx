import React from 'react'
import TopBar from '../../Components/topBar/topBar'
import LeftBar from '../../Components/leftBar/LeftBar'
import Feed from '../../Components/feed/Feed'
import RightBar from '../../Components/rightBar/RightBar'
import './home.css'
const Home = () => {
    return (
        <div>
            <TopBar />
            <div className="homeContainer">
                <LeftBar />
                <Feed />
                <RightBar />

            </div>
        </div>
    )
}

export default Home