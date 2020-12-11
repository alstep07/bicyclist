import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Nav.module.css"

const Nav = () => {
    return (
    <nav className={c.nav}>
	    <div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/profile">Profile</NavLink></div>
	    <div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/dialogs">Messages</NavLink></div>
	    <div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/statistic">Statistic</NavLink></div>
	    <div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/groups">Groups</NavLink></div>
		<div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/bikes">Bikes</NavLink></div>
	    <div className={c.item}><NavLink className={c.link} activeClassName={c.active} to="/photo">Photo</NavLink></div>
    </nav>
    )
};

export default Nav;