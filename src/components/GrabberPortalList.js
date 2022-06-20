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
  // console.log(items.map(item => item._id));
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
      .get(`http://localhost:3001/grabbeditems/${userInfo}`, userInfo)
      .then(({ data }) => {
        setGrabbedItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/wisheditems/${userInfo}`, userInfo)
      .then(({ data }) => {
        // console.log(userInfo);
        setWishedItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo]);

  const itemDetails = (_id) => {
    navigate("/details/" + _id);
    // console.log(_id);
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
                <Button>Delete</Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default GrabberPortalList;
