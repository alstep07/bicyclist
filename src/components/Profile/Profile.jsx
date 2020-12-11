import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PersonalData from "./PersonalData/PersonalData";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <MyPosts posts={props.posts}/>
            <PersonalData />
        </div>
    )
};

export default Profile;