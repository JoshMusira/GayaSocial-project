import './share.css'
import profile from '../../assets/person/1.jpeg'
import { MdPermMedia, MdLabelImportant, MdOutlineRoom, MdOutlineEmojiEmotions } from 'react-icons/md'
const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={profile} alt="profile" />
                    <input
                        placeholder="What's in your mind Safak?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia style={{ color: 'red' }} className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <MdLabelImportant style={{ color: 'purple' }} className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdOutlineRoom style={{ color: 'blue' }} className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <MdOutlineEmojiEmotions style={{ color: 'aqua' }} className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share