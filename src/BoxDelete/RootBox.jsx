import React, { useState } from 'react';

const RootBox = ({ item, handleDelete }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div>
        <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
        <span>{item}</span>
  
        {isChecked && <button onClick={handleDelete}>Delete</button>}
      </div>
    );
  };
  export default RootBox