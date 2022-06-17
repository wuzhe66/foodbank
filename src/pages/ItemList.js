import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ItemRow from "./ItemRow";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";

function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  const [userInfo, setUserInfo] = React.useContext(UserInContext);

  // alert(userInfo);

  const [user, setUser] = useState("");

  const usernameRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:3001/items/" + userInfo)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return items.map((res, i) => {
      return <ItemRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      {isLoggedIn ? "Welcome Back : " + userInfo : ""}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Itemname</th>
            <th>Username</th>
            <th>Expiredate</th>
            <th>Address</th>
            <th>Description</th>
            <th>Status</th>
            <th>Winner</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
}

export default ItemList;
