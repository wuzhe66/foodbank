import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";

function Update(props) {
  const [form, setForm] = useState({
    itemname: "",
    username: "",
    expiredate: "",
    address: "",
    description: "",
    isActive: "",
    winner: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id = params.id.toString();
    axios
      .get("http://localhost:3001/items/edit/" + id)
      .then((res) => {
        const {
          itemname,
          username,
          expiredate,
          address,
          description,
          isActive,
          winner,
        } = res.data;
        setForm({
          itemname,
          username,
          expiredate,
          address,
          description,
          isActive,
          winner,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedItem = {
      itemname: form.itemname,
      username: form.username,
      expiredate: form.expiredate,
      address: form.address,
      description: form.description,
      isActive: form.isActive,
      winner: form.winner,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3001/items/edit/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(editedItem),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // json.success ? alert("post success") : alert(json.msg);
      if (res.status === 200) alert("Update successfully ");
      else Promise.reject();
    });

    navigate("/itemList");
  }

  return (
    <div>
      <br />
      <br />
      <div className="form-wrapper">
        <h3>Update Record</h3>
        <Form onSubmit={onSubmit} className="form-style-5">
          <Form.Group className="col-sm-4">
            <Form.Label>Itemname</Form.Label>
            <Form.Control
              id="itemname"
              type="text"
              value={form.itemname}
              onChange={(e) => updateForm({ itemname: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="col-sm-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              type="text"
              value={form.username}
              onChange={(e) => updateForm({ username: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Expiredate</Form.Label>
            <Form.Control
              id="expiredate"
              type="date"
              value={form.expiredate}
              onChange={(e) => updateForm({ expiredate: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              id="address"
              type="text"
              value={form.address}
              onChange={(e) => updateForm({ address: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="description"
              type="text"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="col-sm-4">
            <Form.Label htmlFor="disabledSelect">Active</Form.Label>
            <Form.Select
              id="disabledSelect"
              value={form.isActive}
              onChange={(e) => updateForm({ isActive: e.target.value })}
              required
            >
              <option value={true}>active</option>
              <option value={false}>inactive</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-sm-4">
            <Form.Label>Winner</Form.Label>
            <Form.Control
              id="winner"
              type="text"
              value={form.winner}
              onChange={(e) => updateForm({ winner: e.target.value })}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Update;
