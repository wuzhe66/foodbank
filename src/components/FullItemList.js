import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../context';

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "react-bootstrap";
import ItemTableRow from "./ItemTableRow";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../styles/itemlist_g.css";

const FullItemList = () => {
  const navigate = useNavigate();


  const [items, setItems] = useState([]);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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

  const DataTable = () => {
    return items.map((res, i) => {
      return <ItemTableRow obj={res} key={i} />;
    });
  };

  const itemDetails = (_id) => {
    navigate("/details/" + _id);
  };

  return (
    <div className="item-container">
      <div className="table-wrapper">
        <ReactTable
          className="react-table"
          style={{
            color: darkMode && "white",
          }}
          data={items}
          defaultPageSize={8}
          pageSizeOptions={[5, 8, 10, 20]}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "ItemName",
              accessor: "itemname",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value),
            },
            {
              Header: "Restaurant Name",
              accessor: "username",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value),
            },
            {
              Header: "Expire Date",
              accessor: "expiredate",
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
              Header: "Description",
              accessor: "description",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value),
            },
            {
              Header: "Action",

              accessor: "isActive",
              id: "over",
              Cell: (data) => (
                <div>
                  <Button
                    size="sm"
                    onClick={(props) => itemDetails(data.row._original._id)}
                    variant="primary"
                  >
                    Grab 
                  </Button>
                </div>
              ),
              filterMethod: (filter, row) => {
                if (filter.value === "all") {
                  return true;
                }
                if (filter.value === "true") {
                  return row[filter.id];
                }
                return !row[filter.id];
              },
              Filter: ({ filter, onChange }) => (
                <select
                  onChange={(event) => onChange(event.target.value)}
                  style={{ width: "100%" }}
                  value={filter ? filter.value : "all"}
                >
                  <option value="all">Show All</option>
                  <option value="true">Available</option>
                  <option value="false">Unavailable</option>
                </select>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FullItemList;
