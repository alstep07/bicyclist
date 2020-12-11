import React from "react";
import logo from "../../img/crank.svg";
import c from "./Header.module.css";

const Header = () => {
    return (
        <header className={c.header}>
			<img className={c.logo} src={logo} alt="bike logo" />
            <h1 className={c.name}>BicycList</h1>
		</header>
    )
};

export default Header;