import React, { useEffect, useState } from "react";

const RootBox = ({ item, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  }
  useEffect(() => {
    setIsChecked(false);
  }, [item]);
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span>{item}</span>

      {isChecked && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};
export default RootBox;
