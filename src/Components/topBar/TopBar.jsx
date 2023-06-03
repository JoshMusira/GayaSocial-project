import './topBar.css'
import { IoIosNotifications } from 'react-icons/io'
import { BsSearch, BsFillPersonFill, BsChatDots } from 'react-icons/bs'
import profilephoto from '../../assets/person/1.jpeg'
const TopBar = () => {
    return (
        <div className='topBarContainer'>
            <div className="topBarLeft">
                <span className="logo">GayaSocial</span>
            </div>
            <div className="topBarCenter">
                <BsSearch className='span' />
                <input placeholder='Search for friend, post or video' className="searchInput" />

            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Homepage
                    </span>
                    <span className="topBarLink">TimeLine
                    </span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <BsFillPersonFill className='icon' />
                        <span className="topBarIconBadge">1</span>

                    </div>
                    <div className="topBarIconItem">
                        <BsChatDots className='icon' />
                        <span className="topBarIconBadge">7</span>

                    </div>
                    <div className="topBarIconItem">
                        <IoIosNotifications className='icon' />
                        <span className="topBarIconBadge">4</span>

                    </div>
                </div>
                <div className="topBarImg">
                    <img src={profilephoto} alt="profilephoto" />
                </div>

            </div>

        </div>
    )
}

export default TopBar