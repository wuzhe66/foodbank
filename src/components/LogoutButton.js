import React from "react";
import { LoggedInContext } from "../App";


function LogoutButton(){

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);


    const handleLogOut = (e) => {

        e.preventDefault();
        setIsLoggedIn(false);   
     }

    return(
        <button onClick={handleLogOut}>Log Out</button>
    )
}

export default LogoutButton;