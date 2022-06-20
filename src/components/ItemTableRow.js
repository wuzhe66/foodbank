import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const ItemTableRow = (props) => {
  const { _id, itemname, username, expiredate, address, description, isActive } =
    props.obj;
    // console.log("isActive="+isActive);

  const wishList = () => {
    axios
      .delete("http://localhost:3001/items/delete-item/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("item successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  const grabItem = () => {
    axios
      .delete("http://localhost:3001/items/delete-item/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("item successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
        <tr style={{display: isActive ? '' : 'none'}}>
        <td>{itemname}</td>
        <td>{username}</td>
        <td>{expiredate}</td>
        <td>{address}</td>
        <td>{description}</td>
        <td>
            <Button onClick={grabItem} size="sm" variant="success">Grab</Button>
            <Button onClick={wishList} size="sm" variant="primary">WishList</Button>
        </td>
        </tr>
  );
};

export default ItemTableRow;
