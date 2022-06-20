import React from "react";
import {counts} from "./Category";
import Count from "./Count";

const CounterData = () => {
  return (
    <div className="">
      {counts.map((count) => (
        <Count key={count.id} data={count} />
      ))}
    </div>
  );
};

export default CounterData;
