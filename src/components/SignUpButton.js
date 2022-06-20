import React from "react";
import './SignUpButton.css';
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";


function SignUpButton(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });


    return (
        <NavLink to={props.to}>
            <button className="btn">Sign Up</button>
        </NavLink>
    );

}

export default SignUpButton;