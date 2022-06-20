import React, { useRef, useState } from "react";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";

import Navbar from "./Navbar";
import Toggle from "./Toggle";



function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
    const [userInfo, setUserInfo] = React.useContext(UserInContext);
    // alert(userInfo);
    const [user, setUser] = useState('');
    const usernameRef = useRef();

    return (
        <div>
            <Navbar />
            <Toggle />
        </div>

    )

}

export default Header;