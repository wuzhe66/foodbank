import React, { useEffect, useRef, useState } from "react";
import { faCheck, faTimes, faInfoCircle, faCodeMerge, faThumbsUp, faThumbsDown,faFaceGrinBeam, faFaceDizzy, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import "./RegisterForm.css";
import { NavLink } from "react-router-dom";
import { UserInContext } from "../App";

import { LoggedInContext } from '../App';

const USER_REGEX = /^[a-zA-Z0-9-_]{2,8}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {


  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [userInfo, setUserInfo] = React.useContext(UserInContext);


  const userRef = useRef();
  const errRef = useRef();


  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);


  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);



  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user, pwd);
    // setSuccess(true);

    try {

      axios.post(
        "http://localhost:3001/users/register",
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


      // console.log(response?.accessToken);
      // console.log(JSON.stringify(response))

      setSuccess(true);
      setUser('');
      setPwd('');
      setMatchPwd('');

    } catch (err) {
      if (err.response?.status === 409) {
        setErrMsg('Username has Taken');
      }
      errRef.current.focus();
    }


  }


  return (
    <>
      {isLoggedIn ? (
        <section>
          <h1>Success! Nice to meet you {userInfo}</h1>
          <p>
            <NavLink to="/Header">Go Hompage</NavLink>
          </p>
        </section>
      )
        :
        (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1> Join Us Today!</h1>

            <form onSubmit={handleSubmit}>

              {/* <div className="form-inputs"> */}
              <label htmlFor="username">
                Username :
                {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} /> */}
                <FontAwesomeIcon icon={faFaceGrinBeam} className={validName ? "valid" : "hide"} />

                <FontAwesomeIcon icon={faFaceDizzy} className={validName || !user ? "hide" : "invalid"} />
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                className="form-input"
                name="username"
                placeholder="Enter your username"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faComment} />
                Enter a combination of 2-8 letters and numbers.<br />

              </p>

              <label htmlFor="password">
                Password:
                <FontAwesomeIcon icon={faFaceGrinBeam} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faFaceDizzy} className={validPwd || !pwd ? "hide" : "invalid"} />
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faComment} />
                Make a good one ! <br />
                Uppercase Lowercase numbers and specials :&ensp;
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>

              </p>


              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon icon={faFaceGrinBeam} className={validMatch && matchPwd ? "valid" : "hide"} />

                {/* <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faComment} />
                Make it match the good one!
              </p>

              <button type="submit" className="form-input-btn" disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign Up
              </button>
            </form>

            <p>
              Already registered?<br />
              <span className="line">
                <NavLink to="/login">Log In</NavLink>
              </span>
            </p>

          </section>
        )}
    </>
  )
}

export default RegisterForm;
