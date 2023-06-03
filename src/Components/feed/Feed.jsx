import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'

const Feed = () => {
    return (
        <div className='feedBar'>
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed