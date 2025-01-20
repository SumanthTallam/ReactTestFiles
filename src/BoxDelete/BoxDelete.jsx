import React, { useState } from "react";
import { boxData } from "./constants";
import RootBox from "./RootBox";
const BoxDelete = () => {
  const [data, setData] = useState(boxData);


  const handleDelete = (el) => {
  const filterData= data.filter((ele) => {
      return ele !== el;
    });
    setData(filterData)
  };

  return (
    <div>
      <div>
        {data.map((item,i) => {
          return <RootBox key={i} item={item} handleDelete={()=>handleDelete(item)} />;
        })}
      </div>
    </div>
  );
};


export default BoxDelete;
