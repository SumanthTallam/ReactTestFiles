import React, { useState } from "react";
import { data } from "./constants";

const Accordian = () => {
  return (
    <div>
      <h2>Accordian</h2>
      {data.map(({ title, content }) => {
        return <ChildAccordian title={title} content={content} />;
      })}
    </div>
  );
};
const ChildAccordian = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <h3 style={{ color: "red", cursor:'pointer'}}>
          {title}
          <span onClick={handleClick}>{open ? " - " : " + "}</span>
        </h3>
      </div>
      <div>{open && <p>{content}</p>}</div>
    </div>
  );
};

export default Accordian;
