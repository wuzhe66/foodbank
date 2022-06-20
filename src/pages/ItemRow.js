import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemRow = (props) => {
  const {
    _id,
    itemname,
    username,
    address,
    expiredate,
    description,
    isActive,
    winner,
  } = props.obj;

  const deleteItem = () => {
    axios
      .delete("http://localhost:3001/items/delete/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Item successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{itemname}</td>
      <td>{username}</td>
      <td>{expiredate}</td>
      <td>{address}</td>
      <td>{description}</td>
      <td>{String(isActive)}</td>
      <td>{winner}</td>
      <td>
        <Link className="edit-link" to={"/edit/" + _id}>
          <Button size="sm">Edit</Button>
        </Link>
        <Button onClick={deleteItem} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemRow;
