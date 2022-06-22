import React from "react";
import { showdata } from "./Category";
import Count from "./Count";

const CounterData = () => {
  return (
    <>

      <div>

        {showdata.map((item) => (

          <Count key={item.id} data={item}  />

        ))}
      </div>

    </>


  )



};

export default CounterData;
