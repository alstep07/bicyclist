import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PersonalData from "./PersonalData/PersonalData";
import Friends from "./Friends/Friends";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
            <PersonalData personalData={props.profilePage.personalData}/>
            <Friends friends={props.profilePage.friends}/>
        </div>
    )
};

export default Profile;
