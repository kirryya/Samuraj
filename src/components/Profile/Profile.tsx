import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.tsx";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61813380-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=35040e9874b05a262b0e5ffdd27806cf'
                    alt='Ромашка'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;