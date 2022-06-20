import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
// import  Table  from "./Table";
import ItemTableRow from "./ItemTableRow";
// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../styles/itemlist_g.css";

const FullItemList = () => {
  // const { itemname, username, expiredate, address, description, isActive } = props.obj || {};

  const [items, setItems] = useState([]);
  // console.log(items.map(item => item._id));
  const navigate = useNavigate();


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
    // console.log(_id);
  };

  return (
    <div className="item-container">
      <div className="table-wrapper">
        <ReactTable
          className="react-table"
          data={items}
          defaultPageSize={8}
          pageSizeOptions= {[5, 8, 10, 20]}
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
              // accessor: "isActive",
              // filterable: false,
              // Cell:  data  => (
              // 	// console.log(data.row._original._id)
              // 	<div>
              // 		<Button size="sm" onClick={props=>itemDetails(data.row._original._id)} variant="primary">Details</Button>
              // 	</div>
              // )
              accessor: "isActive",
              id: "over",
              Cell: (data) => (
                <div>
                  <Button
                    size="sm"
                    onClick={(props) => itemDetails(data.row._original._id)}
                    variant="primary"
                  >
                    Details
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
                  <option value="true">Ungrabbed</option>
                  <option value="false">Grabbed</option>
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
