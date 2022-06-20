import React, { useEffect, useRef, useState } from 'react';
import { LoggedInContext } from '../App';
import { UserInContext } from "../App";

import { NavLink } from "react-router-dom";
import axios from 'axios';



const LoginForm = () => {

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
    const [userInfo, setUserInfo] = React.useContext(UserInContext);


    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            axios.post(
                "http://localhost:3001/users/login",
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true
                }
            )
                .then(
                    (response) => {
                        // const accessToken = response.data.accessToken;
                        // const roles = response.data.roles;
                        // setIsLoggedIn({ user, pwd, roles, accessToken })
                        console.log(response.data);
                        response.data.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
                        response.data.success ? setUserInfo(user) : setUserInfo('Visiter');

                        setErrMsg(response.data.msg);
                        // setSuccess(true);
                    }
                );
            // console.log(JSON.stringify(response.data));
            // const accessToken = response.data.accessToken;
            // const roles = response.data.roles;
            // setIsLoggedIn({ user, pwd, roles, accessToken })
            setUser('');
            setPwd('')
        } catch (err) {
            console.log(err)
            errRef.current.focus();
        }

    }

    return (
        <>
            {isLoggedIn ? (
                <section>
                    <h1>Welcome Back!  {userInfo} </h1>
                    <p>
                        <NavLink to="/Header">Go To Hompage</NavLink>
                    </p>
                </section>
            )
                :
                (

                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Log In</h1>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                type="text"
                                ref={userRef}
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />


                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            Need a Account? <br />
                            <span className="line">
                                <NavLink to="/sign-up">Sign Up</NavLink>
                            </span>
                        </p>
                    </section>
                )}

        </>





    )
}

export default LoginForm;