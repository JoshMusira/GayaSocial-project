import './rightBar.css'
import gift from '../../assets/gift.png'
import add from '../../assets/ad.png'
import person3 from '../../assets/person/3.jpeg'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        <img className='birthdayImg' src={gift} alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
        <img className='rightbarAd' src={add} alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={person3} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mike Underson</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar