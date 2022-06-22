import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserInContext } from "../App";
import { Button } from "react-bootstrap";
// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../styles/grabportallist.css";

const GrabberPortalList = () => {
  const [items, setItems] = useState([]);
  const [grabbeditems, setGrabbedItems] = useState([]);
  const [wisheditems, setWishedItems] = useState([]);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = React.useContext(UserInContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/items/")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/grabbeditems/${userInfo}`,userInfo)
      .then(({ data }) => {
        setGrabbedItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/wisheditems/${userInfo}`,userInfo)
      .then(({ data }) => {
        setWishedItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo]);

  const deleteGrabbedItem = async (id,userInfo) => {
    await axios.delete(`http://localhost:3001/grabbeditems/${id}`, id)
      .then((res) => {
        if (res.status === 200) {
          alert("Grabbed Item successfully deleted");
          axios.get(`http://localhost:3001/grabbeditems/${userInfo}`,userInfo)
          .then(({ data }) => {
            // console.log(userInfo);
            setGrabbedItems(data);
          }); 
         axios.put("http://localhost:3001/items/ungrab", {id});
          navigate("/grabberportal");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  const deleteWishedItem = async (id,userInfo) => {
    console.log("delete wish id " + id)
    await axios.delete(`http://localhost:3001/wisheditems/${id}`, id)
      .then((res) => {
        if (res.status === 200) {
          alert("Wishlist Item successfully deleted");
          axios.get(`http://localhost:3001/wisheditems/${userInfo}`,userInfo)
          .then(({ data }) => {
            // console.log(userInfo);
            setWishedItems(data);
          });
          navigate("/grabberportal");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <div className="table-wrapper">
      <h2>Grabbed List</h2>
      <ReactTable
        className="react-table"
        data={grabbeditems}
        defaultPageSize={8}
        pageSizeOptions={[5, 8, 10, 20]}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={[
          {
            Header: "Food Name",
            accessor: "itemname",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value),
          },
          {
            Header: "Restaurant",
            accessor: "username",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value),
          },
          {
            Header: "Address",
            accessor: "address",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value),
          },
          {
            Header: "Action",
            filterable: false,
            accessor: "grabbeditem_id",
            Cell: (data) => (
              <div>
                <Button
                  size="sm"
                  onClick={() =>
                    deleteGrabbedItem(data.row._original.grabbeditem_id,userInfo)
                  }
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />
      <h2>WishList</h2>
      <ReactTable
        className="react-table1"
        data={wisheditems}
        defaultPageSize={8}
        pageSizeOptions={[5, 8, 10, 20]}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={[
          {
            Header: "Food Name",
            accessor: "itemname",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value),
          },
          {
            Header: "Restaurant",
            accessor: "username",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value),
          },
          {
            Header: "Action",
            filterable: false,
            accessor: "itemname",
            Cell: (data) => (
              <div>
                <Button size="sm"
                  onClick={() =>
                    deleteWishedItem(data.row._original.wisheditem_id, userInfo) } variant="danger" >Delete</Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default GrabberPortalList;
