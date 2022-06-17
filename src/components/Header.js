import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";

import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";



function Header() {

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

    const [userInfo, setUserInfo] = React.useContext(UserInContext);

    // alert(userInfo);

    const [user, setUser] = useState('');

    const usernameRef = useRef();

    return (
        <div>

            <div>

                {isLoggedIn ? "Welcome Back : " + userInfo : ""}
                {isLoggedIn ? <LogoutButton />
                    : <div>
                        <LoginButton to="/LoginForm" />
                        <RegisterButton to="/RegisterForm" />
                    </div>
                }
            </div>


        </div>
    )

}

export default Header;