import React, { useRef, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Post.css";
import { ThemeContext } from "../context";
import { UserInContext } from "../App";


function Post() {
  const [userInfo, setUserInfo] = useContext(UserInContext);

  const itemnameRef = useRef();
  const usernameRef = useRef();
  const expiredateRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  const isActiveRef = useRef();
  const winnerRef = useRef();

  const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    return fetch(url + "/items", {
      method: "POST",
      body: JSON.stringify({
        itemname: itemnameRef.current.value,
        // username: usernameRef.current.value,
        username: userInfo,
        expiredate: expiredateRef.current.value,
        address: addressRef.current.value,
        description: descriptionRef.current.value,
        isActive: isActiveRef.current.value,
        winner: winnerRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.status === 200) alert("Post successfully created");
      else Promise.reject();
    });
  };

  return (
    <div className="form-wrapper">
      <br />
      <br />
      <div >
        <Form
          onSubmit={handleSubmit}
          className="form-style-5"
          style={{
            backgroundColor: darkMode && "#a5a5a5",
            color: darkMode && "white",
          }}
        >
          <Form.Group className="col-sm-4">
            <Form.Label>Itemname</Form.Label>
            <Form.Control
              id="itemname"
              type="text"
              ref={itemnameRef}
              required
            />
          </Form.Group>

          <Form.Group className="col-sm-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              type="text"
              // ref={usernameRef}
              // required
              value={userInfo}
            />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Expiredate</Form.Label>
            <Form.Control
              id="expiredate"
              type="date"
              ref={expiredateRef}
              required
            />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Address</Form.Label>
            <Form.Control id="address" type="text" ref={addressRef} required />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="description"
              type="text"
              ref={descriptionRef}
              required
            />
          </Form.Group>

          <Form.Group className="col-sm-4">
            <Form.Label htmlFor="disabledSelect">Active</Form.Label>
            <Form.Select id="disabledSelect" ref={isActiveRef} required>
              <option value={true}>active</option>
              <option value={false}>inactive</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Winner</Form.Label>
            <Form.Control id="winner" type="text" ref={winnerRef} disabled />
          </Form.Group>
          <Button variant="danger" type="submit">
            post
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Post;
