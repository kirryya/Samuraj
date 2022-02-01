import React from "react";
// @ts-ignore
import s from './Post.module.css'


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png'
                 alt='Аватар'/>
            {props.message}
            <div>
                <span>likes </span>
                {props.likesCount}
            </div>
        </div>
    )
}


export default Post;