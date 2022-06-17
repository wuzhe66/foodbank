import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";

function About() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  const [userInfo, setUserInfo] = React.useContext(UserInContext);

  // alert(userInfo);

  const [user, setUser] = useState("");

  const usernameRef = useRef();
  return (
    <div>
      {isLoggedIn ? "Welcome Back : " + userInfo : ""}
      <h1>About page</h1>
      <Button variant="primary">about</Button>
    </div>
  );
}

export default About;
