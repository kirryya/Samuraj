import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>
                    <Post message='Hi, how are you?' likesCount="30"/>
                    <Post message="It's my first post" likesCount="15"/>
                </div>
            </div>
        </div>
    )
}


export default MyPosts;