import React from "react";
import { NavLink, useResolvedPath, useMatch} from "react-router-dom"; 


function LoginButton(props){

    let resolved = useResolvedPath(props.to);

    let match = useMatch({ path: resolved.pathname, end: true });


    
    return(
        <NavLink to={props.to}>
            <button>Login</button>
        </NavLink>

    );
}

export default LoginButton;