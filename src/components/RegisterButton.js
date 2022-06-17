import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";


function RegisterButton(props){
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });


    return(
        <NavLink to={props.to}>
            <button >Register Button</button>
        </NavLink>
    );

}

export default RegisterButton;