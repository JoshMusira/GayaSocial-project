import './post.css'
import { MdMoreVert } from 'react-icons/md'
import profile from '../../assets/person/1.jpeg'
import post from '../../assets/post/1.jpeg'
import like from '../../assets/like.png'
import heart from '../../assets/heart.png'

const Post = () => {

    return (
        <div className='post'>
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={profile} alt="profile" />
                    <span className="postUserName">Safak Mohamed</span>
                    <span className="postDate">7 mins Ago</span>
                </div>
                <div className="postTopRight">
                    <MdMoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey!Can we mingle:)</span>
                <img className='postImg' src={post} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={like} alt="" />
                    <img className='likeIcon' src={heart} alt="" />
                    <span className="postLikeCounter">32 people like it</span>

                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        9 comments
                    </span>
                </div>
            </div>


        </div>
    )
}

export default Post