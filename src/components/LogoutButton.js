import React from "react";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";
import './SignUpButton.css';


function LogoutButton(pros) {

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
    const [userInfo, setUserInfo] = React.useContext(UserInContext);


    const handleLogOut = (e) => {

        e.preventDefault();
        setIsLoggedIn(false);
        setUserInfo('Visiter');
    }

    return (
        <button onClick={handleLogOut} class="btn2">Log Out</button>
    )
}

export default LogoutButton;