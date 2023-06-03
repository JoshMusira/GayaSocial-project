import './leftBar.css'
import { MdRssFeed, MdOutlinePlayCircleFilled, MdHelpOutline, MdWorkOutline, MdSchool } from 'react-icons/md'
import { BsFillChatDotsFill, BsFillBookmarksFill, BsFillCalendar2EventFill } from 'react-icons/bs'
import { FaLayerGroup } from 'react-icons/fa'
// import { IoSchoolSharp } from 'react-icons/io'
import friend from '../../assets/person/2.jpeg'

const LeftBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdRssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillChatDotsFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlinePlayCircleFilled className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaLayerGroup className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarksFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdHelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdWorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillCalendar2EventFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdSchool className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={friend} alt="FriendsImage" />
                        <span className="sidebarFriendName">
                            John Smith
                        </span>
                    </li>
                </ul>
                {/* <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default LeftBar